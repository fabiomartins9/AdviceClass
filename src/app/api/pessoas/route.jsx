import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const db = await open({
      filename: "public/uploads/escola.db",
      driver: sqlite3.Database,
    });

    const queryDiretores = `SELECT * FROM diretor`;
    const queryCoordenadores = `SELECT * FROM coordenadores`;

    const diretores = await db.all(queryDiretores);
    const coordenadores = await db.all(queryCoordenadores);

    // console.log("Coorde: ", coordenadores)
    // console.log("Dretores: ", diretores)

    return NextResponse.json({
      diretores,
      coordenadores,
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
