import { NextResponse } from "next/server";
import connectDb from "@/app/utils/connectBd";

export async function GET(req) {
  try {
    const db = await connectDb()
    const queryDiretores = `SELECT * FROM diretor`;
    const queryCoordenadores = `SELECT * FROM coordenadores`;

    const diretores = await db.all(queryDiretores);
    const coordenadores = await db.all(queryCoordenadores);

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
