import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.JWT_SECRET || "chave-secreta";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("cookie")?.split("token=")[1];

    if (!token) {
      return NextResponse.json(
        { error: "Acesso negado! Token não encontrado." },
        { status: 401 },
      );
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    return NextResponse.json(
      {
        message: "Bem-vindo à área de alunos!",
        user: decoded,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Token inválido ou expirado!" },
      { status: 403 },
    );
  }
}
