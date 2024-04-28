'use client'
import Image from "next/image";
import { useContext, useState } from 'react';
import { AuthContext } from '@/app/Context/nextauth';
import DirectoryPicker from "@/components/DirectoryPicker"
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
      <h1 className="text-3xl font-bold mb-4">Selecionar Diretório</h1>
      <DirectoryPicker />
    </div>
  );
}