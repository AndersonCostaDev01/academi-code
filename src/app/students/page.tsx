"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // 🔥 SE NÃO TIVER TOKEN, REDIRECIONA PARA LOGIN
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch("/api/students", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Erro ao buscar usuário");

        setUser(data.user);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
        localStorage.removeItem("token");
        router.push("/login"); // 🔥 SE TOKEN FOR INVÁLIDO, FORÇA LOGIN
      }
    };

    fetchUser();
  }, [router]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Carregando...</p>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Área dos Alunos</h1>
      <p>Bem-vindo, {user.email}!</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
      >
        Sair
      </button>
    </div>
  );
}
