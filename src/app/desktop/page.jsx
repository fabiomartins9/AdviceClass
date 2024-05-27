"use client"

import { useContext, useState } from 'react';
import { AuthContext } from '@/app/Context/nextauth';
import TabelaAlunos from "@/components/TabelaDescktop"
import { useRouter } from "next/navigation";


export default function Import() {
  const { signed, loading } = useContext(AuthContext);
  const router = useRouter()


  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!signed) {
    return router.push('/');
  }

  return (
    <div className="container mx-auto p-8">
      <TabelaAlunos/>
    </div>
  );
}