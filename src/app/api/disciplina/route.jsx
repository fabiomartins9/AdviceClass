import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("req.query:", req.url); // Log para verificar os parâmetros da requisição
  const { searchParams } = new URL(req.url);
  const disciplinaEncoded = searchParams.get("id");
  const disciplina = decodeURIComponent(disciplinaEncoded);
  console.log("disciplina:", disciplina); // Log para verificar os parâmetros da requisição

  try {
    const db = await open({
      filename: "src/app/dataBase/database.sqlite",
      driver: sqlite3.Database,
    });

    const query = `
    SELECT disciplina.id, disciplina.nome
    FROM disciplina
    INNER JOIN join_disciplina_professor_turma ON disciplina.id = join_disciplina_professor_turma.id_disciplina
    WHERE join_disciplina_professor_turma.id_turma = ?;
    `;

    const result = await db.all(query, [disciplina]);


    const nomesDisciplina = result.map(({ nome }) => nome);
    console.log("disciplina: ", nomesDisciplina)

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
