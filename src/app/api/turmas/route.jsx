import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let namesArray;

    // Verifica se o corpo da requisição está chegando como texto
    if (typeof request.body === 'string') {
      namesArray = JSON.parse(request.body);
    } else {
      // Caso contrário, tenta ler o corpo da requisição como JSON
      namesArray = await request.json();
    }

    // Verifique o que está sendo recebido
    console.log('Dados recebidos pela API:', namesArray);

    // Abre o banco de dados SQLite
    const db = await open({
      filename: "src/app/dataBase/database.sqlite",
      driver: sqlite3.Database,
    });

    // Itera sobre os nomes dos arquivos e insere na tabela 'turma'
    for (const name of namesArray) {
      await db.run("INSERT INTO turma (nome_turma) VALUES (?)", [name]);
    }

    // Fecha o banco de dados após a conclusão
    await db.close();

    // Retorna uma resposta de sucesso para o cliente
    return NextResponse.json(
      { message: "Arquivos inseridos com sucesso na tabela turma." },
      { status: 200 }
    );
  } catch (error) {
    // Se houver algum erro, retorna uma resposta de erro para o cliente
    console.error('Erro ao processar a requisição: ', error)
    return NextResponse.json(
      { error: "Erro ao processar a requisição: " + error },
      { status: 500 }
    );
  }
}
