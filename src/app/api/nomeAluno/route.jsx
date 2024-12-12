import connectDb from "@/app/utils/connectBd";

import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const turmaEncoded = searchParams.get("turma");
  const turma = decodeURIComponent(turmaEncoded);

  try {
    const db = await connectDb()

    const query = `
    SELECT aluno.nome_aluno, aluno.numero_chamada
    FROM aluno
    INNER JOIN turma ON aluno.id_turma = turma.id
    WHERE turma.nome_turma = ? and aluno.situacao_aluno = "Ativo"
    ORDER BY aluno.nome_aluno;

    `;

    const result = await db.all(query, [turma]);

    const nomesAlunos = result.map(({ nome_aluno }) => nome_aluno);

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
