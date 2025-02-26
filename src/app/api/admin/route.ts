import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || "chave-secreta";

export async function GET(req: Request) {
  try {
    // 🔥 Pegamos o token do Header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Acesso negado! Token não encontrado." },
        { status: 401 },
      );
    }

    const token = authHeader.split(" ")[1];

    // 🔥 Decodificar o Token
    const decoded = jwt.verify(token, SECRET_KEY) as {
      id: string;
      isAdmin: boolean;
    };

    if (!decoded.isAdmin) {
      return NextResponse.json(
        { error: "Acesso negado! Apenas administradores podem acessar." },
        { status: 403 },
      );
    }

    // 🔥 Buscar dados do admin no banco de dados
    const admin = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        createdAt: true,
      },
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Admin não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "Bem-vindo, Admin!",
        admin, // 🔥 Retorna as informações do admin
      },
      { status: 200 },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Token inválido ou expirado!" },
      { status: 403 },
    );
  }
}
