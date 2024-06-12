import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";

export async function GET(req) {
  
  const { searchParams } = new URL(req.url);
  const disciplinaEncoded = searchParams.get("id");
  const disciplina = decodeURIComponent(disciplinaEncoded);


  try {
    const db = await open({
      filename: "public/uploads/escola.db",
      driver: sqlite3.Database,
    });

    const query = `
    SELECT DISTINCT
    disciplina.id,
    disciplina.nome
  FROM disciplina
  INNER JOIN join_disciplina_professor_turma
    ON disciplina.id = join_disciplina_professor_turma.id_disciplina
  WHERE join_disciplina_professor_turma.id_turma = ?
  ORDER BY ROW_NUMBER() OVER (PARTITION BY disciplina.id, disciplina.nome)
  
    `;

    const result = await db.all(query, [disciplina]);


    const nomesDisciplina = result.map(({ nome }) => nome);
    
    return NextResponse.json(nomesDisciplina, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro ao buscar os dados." },
      {
        status: 500,
      }
    );
  }
}
