//turmaSelect.jsx

import connectDb from "@/app/utils/connectBd";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        
        const db = await connectDb()
    
        const query = `
        SELECT DISTINCT id, nome_turma
        FROM turma
        ORDER BY nome_turma ASC;   
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
