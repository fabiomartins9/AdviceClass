'use client'

// pages/signOut.js

import { Button } from "antd";
import Head from "next/head";
// Importe o hook `useContext` para acessar o contexto de autenticação
import { useContext, useEffect } from "react";
// Importe o contexto de autenticação
import { AuthContext } from "@/app/Context/nextauth"; // Verifique o caminho do seu arquivo AuthProvider
import { useRouter } from "next/navigation";

const SignOut = () => {
  const { signOut } = useContext(AuthContext); // Obtenha a função signOut do contexto de autenticação
  const { signed, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!signed && !loading) {
      router.push('/');
    }
  }, [signed, loading, router]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleSignOut = async () => {
    try {
      await signOut(); // Chame a função signOut para desconectar o usuário
      // O usuário será redirecionado para a página de login automaticamente após o logout
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      // Aqui você pode adicionar tratamento de erro, se necessário
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Sign Out</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
      <p className="text-gray-600 mb-6">Are you sure you want to sign out?</p>
      <Button type="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;
