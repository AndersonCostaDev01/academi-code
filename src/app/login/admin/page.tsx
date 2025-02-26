"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao fazer login");

      localStorage.setItem("token", data.token); // 🔥 SALVA O TOKEN NO LOCALSTORAGE

      router.push("/admin"); // 🔥 REDIRECIONA PARA ÁREA PROTEGIDA
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">Login para administrador</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
