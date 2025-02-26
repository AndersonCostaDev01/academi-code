import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || "chave-secreta"; // ⚠️ Verifique se está definido na Vercel!

export async function POST(req: NextRequest) {
  try {
    console.log("📌 [LOGIN] API de login chamada!"); // 🔍 Log inicial

    // 🔥 Lendo os dados enviados no body da requisição
    const { email, password } = await req.json();
    console.log("📌 [LOGIN] Dados recebidos:", { email, password });

    if (!email || !password) {
      console.log("❌ [LOGIN] E-mail ou senha ausentes!");
      return NextResponse.json(
        { error: "E-mail e senha são obrigatórios" },
        { status: 400 },
      );
    }

    // 🔍 Buscando usuário no banco de dados
    const user = await prisma.user.findUnique({ where: { email } });
    console.log("📌 [LOGIN] Usuário encontrado:", user);

    if (!user) {
      console.log("❌ [LOGIN] Usuário não encontrado!");
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 },
      );
    }

    // 🔍 Comparando a senha informada com a do banco
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("📌 [LOGIN] Senha válida?", isPasswordValid);

    if (!isPasswordValid) {
      console.log("❌ [LOGIN] Senha incorreta!");
      return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
    }

    // 🔥 Criando Token JWT
    console.log("📌 [LOGIN] Gerando token...");
    const token = jwt.sign(
      { id: user.id, email: user.email, isAdmin: user.isAdmin },
      SECRET_KEY,
      { expiresIn: "7d" }, // Expira em 7 dias
    );

    console.log("✅ [LOGIN] Token gerado com sucesso!");

    return NextResponse.json({ token, isAdmin: user.isAdmin }, { status: 200 });
  } catch (error) {
    console.error("❌ [LOGIN] Erro no servidor:", error); // 🔥 Mostra erro no terminal/Vercel
    return NextResponse.json({ error: "Erro ao fazer login" }, { status: 500 });
  }
}
