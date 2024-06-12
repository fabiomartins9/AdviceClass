'use client'
import Image from "next/image";
import { useContext, useState } from 'react';
import { AuthContext } from '@/app/Context/nextauth';
import UploadComponent from "@/components/DirectoryPicker"
import { useRouter } from "next/navigation";
import UploadImgForm from "@/components/UploadImg";


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
    <div className="container mx-auto p-8 flex justify-center items-center h-screen">
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-4">Pagina de importações</h1>
    <div className="flex flex-col lg:flex-row lg:gap-8">
      <div className="flex-grow">
        <UploadComponent />
      </div>
      <div className="flex-grow">
        <UploadImgForm/>
      </div>
    </div>
  </div>
</div>

  );
}