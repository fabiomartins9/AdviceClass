//dataTable.jsx

import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req) {
  console.log("req.query:", req.url); // Log para verificar os parâmetros da requisição
  //saida do console: req.query: http://localhost:3000/api/dataTable?turma=9%C2%BA%20TERMO%20A1%20NOITE%201%C2%BA%20SEMESTRE
  const { searchParams } = new URL(req.url);
  const turma = searchParams.get("turma");
  //Erro retornado:  ⨯ TypeError: Cannot read properties of undefined (reading 'get')
  console.log("Turma:", turma); // Log para verificar os parâmetros da requisição

  try {
    const db = await open({
      filename: "src/app/dataBase/database.sqlite",
      driver: sqlite3.Database,
    });

    const query = `
      SELECT aluno.Aluno, materia.Disciplina
      FROM aluno
      LEFT JOIN materia ON aluno.Turma = materia.Turma
      WHERE aluno.Turma = ?
    `;

    const result = await db.all(query, [turma]);

    // Organizar os dados para construir a tabela
    const tabelaOrganizada = {};

    result.forEach(({ Aluno, Disciplina }) => {
      if (!tabelaOrganizada[Aluno]) {
        tabelaOrganizada[Aluno] = {};
      }
      tabelaOrganizada[Aluno][Disciplina] = "";
    });

    // Transformar os dados em um array para renderização
    const linhas = Object.keys(tabelaOrganizada).sort();
    const colunas = Object.keys(tabelaOrganizada[linhas[0]]).sort();

    const tabelaFinal = [
      ["Aluno", ...colunas],
      ...linhas.map((aluno) => [aluno, ...colunas.map(() => "")]),
    ];

    return NextResponse.json(tabelaFinal, {
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
