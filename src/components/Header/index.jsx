"use client";
import Link from "next/link";
import { AuthContext } from "@/app/Context/nextauth";
import { useContext } from "react";

export function Header() {
  const { signed } = useContext(AuthContext);

  return (
    <header className=" w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <nav className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className=" text-blue-500 ">Advice</span> Class
          </h1>
        </Link>

        <div className="flex items-baseline gap-4 p-4 bg-white shadow-md rounded-lg">
          {signed && <Link href={"/desktop"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">Conselho</Link>}
          {signed && <Link href={"/import"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">Importar</Link>}          
          {signed && <Link href={"/downloads"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">Downloads</Link>}          
          {!signed && <Link href={"/login"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">Entrar</Link>}
          {signed && <Link href={"/signOut"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">Sair</Link>}

          
        </div>
      </nav>
    </header>
  );
}
