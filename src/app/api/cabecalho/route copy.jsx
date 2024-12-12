import { NextResponse } from "next/server";
import { parse } from "url";
import connectDb from "@/app/utils/connectBd";

export async function GET(req) {
  try {
    
   const db = await connectDb()

    // Parse the URL to get query parameters
    // const { query } = parse(req.url, true);
    // const nomeTurma = query.nomeTurma;

    // Use a classe URL para extrair parâmetros
    const url = new URL(req.url);
    const nomeTurma = url.searchParams.get('nomeTurma');
    //console.log("nome_turma: ", nomeTurma)

    if (!nomeTurma) {
      return NextResponse.json(
        { message: "O nome da turma é obrigatório." },
        {
          status: 400,
        }
      );
    }

    // Consulta para obter o cabeçalho
    const queryCabecalho = `SELECT id, nome, cidade, bimestre FROM ata_cabecalho`;
    const cabecalho = await db.all(queryCabecalho);

    // Consulta para obter o nome do tipo de ensino baseado no nome da turma
    const queryTipoEnsino = `
      SELECT 
        turma.nome_turma,
        tipo_ensino.nome_tipo_ensino
      FROM 
        turma
      JOIN 
        tipo_ensino ON turma.id_tipo_ensino = tipo_ensino.id
      WHERE 
        turma.nome_turma = ?
    `;
    const tipoEnsino = await db.get(queryTipoEnsino, [nomeTurma]);

    //console.log("cabecalho: ", cabecalho);
    //console.log("tipoEnsino: ", tipoEnsino);

    return NextResponse.json({
      cabecalho,
      tipoEnsino,
    }, {
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
