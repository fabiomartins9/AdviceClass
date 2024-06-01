import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("req.query:", req.url); // Log para verificar os parâmetros da requisição
  const { searchParams } = new URL(req.url);
  const turmaEncoded = searchParams.get("turma");
  const turma = decodeURIComponent(turmaEncoded);
  console.log("Turma:", turma); // Log para verificar os parâmetros da requisição

  try {
    const db = await open({
      filename: "public/uploads/escola.db",
      driver: sqlite3.Database,
    });

    const query = `
    SELECT aluno.*
    FROM aluno
    INNER JOIN turma ON aluno.id_turma = turma.id
    WHERE turma.nome_turma = ? and aluno.situacao_aluno = "Ativo"
    ORDER BY aluno.nome_aluno;
    `;

    const result = await db.all(query, [turma]);


    const nomesAlunos = result.map(({ nome_aluno }) => nome_aluno);
    console.log("nomesAlunos: ", nomesAlunos)

    return NextResponse.json(nomesAlunos, {
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
