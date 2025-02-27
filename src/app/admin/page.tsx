"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
/* */
export default function AdminPage() {
  const [users, setUsers] = useState<User[]>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [admin, setAdmin] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // 🔥 Se não tiver token, volta para login
      return;
    }

    const fetchAdminData = async () => {
      try {
        const res = await fetch("/api/admin", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 403) throw new Error("Acesso negado!");

        const data = await res.json();
        setAdmin(data.admin);
      } catch (err) {
        console.error("❌ Não é admin!", err);
        router.push("/students"); // 🔥 Se não for admin, volta para área de alunos
      }
    };

    fetchAdminData();
  }, [router]);

  /* Busca todos os alunos */
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("api/users", {
          method: "GET",
        });

        if (res.status === 403) throw new Error("Erro na solicitação");

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log("❌ Alunos não localizados", err);
      }
    };

    getUsers();
  }, [admin]);

  if (!admin) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Painel de Administração</h1>
      <p>
        <strong>Nome:</strong> {admin.name}
      </p>
      <p>
        <strong>Email:</strong> {admin.email}
      </p>
      <p>
        <strong>Administrador desde:</strong>{" "}
        {new Date(admin.createdAt).toLocaleDateString()}
      </p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
      >
        Sair
      </button>
      <div>
        {users?.map((res) => (
          <div key={res.id}>
            <p>{res.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
