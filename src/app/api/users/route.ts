/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Cria um novo usuário
 */
export async function POST(req: Request) {
  try {
    const { name, email, password, isAdmin, isActive } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios!" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        isAdmin: isAdmin || false,
        isActive: isActive !== undefined ? isActive : true,
      },
    });

    return NextResponse.json(
      { message: "Usuário criado com sucesso!", user },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 },
    );
  }
}

/**
 * Retorna todos os usuários
 */
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        isActive: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar usuários" },
      { status: 500 },
    );
  }
}
