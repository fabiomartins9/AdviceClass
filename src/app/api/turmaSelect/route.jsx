//turmaSelect.jsx

import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";
import { getDatabaseConnection } from '@/app/utils/db';

export async function GET(req) {
    try {
      const db = await getDatabaseConnection();
    
        const query = `
        SELECT DISTINCT id, nome_turma
        FROM turma;        
        `;
    
        const result = await db.all(query);

        
        // Retorna a lista de turmas disponíveis como JSON
        return NextResponse.json(result);
    }
    catch (error) {
        console.error(error);
        // Retorna uma resposta de erro com status 500
        return NextResponse.json(
          { message: "Erro ao buscar os dados." },
          {
            status: 500,
          }
        );
    }
}
