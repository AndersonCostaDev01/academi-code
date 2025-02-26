import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { email: string } },
) {
  try {
    const { email } = params;

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        password: true,
        email: true,
        isActive: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar usuário" },
      { status: 500 },
    );
  }
}
