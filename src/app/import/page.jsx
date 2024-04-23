'use client'
import Image from "next/image";
import { useContext } from 'react';
import { AuthContext } from '@/app/Context/nextauth';
import XLSXUploader from '@/components/uploadComponent/uploadComponent'
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
    <main>
      <XLSXUploader/>  
    </main>
  );
}