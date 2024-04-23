'use client'
import Image from "next/image";
import { useContext } from 'react';
import { AuthContext } from '@/app/Context/nextauth';
import CSVUploader from '@/components/uploadComponent/uploadComponent'
import { useRouter } from "next/navigation";


export default function Desktop() {
  const { signed, loading } = useContext(AuthContext);
  const router = useRouter()

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!signed) {
    return router.push('/login');
  }
  return (
    <main>
      <h1>Area de trabalho</h1>  
    </main>
  );
}
