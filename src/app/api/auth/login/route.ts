import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || "chave-secreta"; // Defina isso no .env

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "E-mail e senha são obrigatórios" },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 },
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
    }

    // 🔥 Criar token JWT incluindo isAdmin
    const token = jwt.sign(
      { id: user.id, email: user.email, isAdmin: user.isAdmin },
      SECRET_KEY,
      { expiresIn: "7d" }, // Expira em 7 dias
    );

    return NextResponse.json({ token, isAdmin: user.isAdmin }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao fazer login" }, { status: 500 });
  }
}
