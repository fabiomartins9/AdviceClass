import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import * as XLSX from 'xlsx';

// Função para processar CSV ou XLSX e mapear os valores para as chaves corretas
async function processData(file) {
  const workbook = XLSX.read(await file.arrayBuffer(), { type: 'buffer' });
  const sheetName = workbook.SheetNames[0]; // Assume que estamos interessados na primeira planilha
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  return jsonData;
}

// Handles POST requests to /api/converter
export async function POST(request) {
  try {
    const formData = await request.formData();

    // Verifica se os arquivos XLSX foram enviados
    if (!formData.has('xlsxFile1') || !formData.has('xlsxFile2')) {
      return new Response(JSON.stringify({ error: 'Os dois arquivos XLSX devem ser enviados' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const xlsxFile1 = formData.get('xlsxFile1');
    const xlsxFile2 = formData.get('xlsxFile2');

    // Conecta ao banco de dados SQLite
    const db = await open({
      filename: 'src/app/dataBase/database.sqlite', // Caminho para o seu banco de dados SQLite
      driver: sqlite3.Database,
    });

    // Processa os arquivos XLSX e converte para JSON com os valores mapeados para as chaves corretas
    const jsonData1 = await processData(xlsxFile1);
    const jsonData2 = await processData(xlsxFile2);

    // Insere os dados na tabela 'materia'
    await db.exec(`
      CREATE TABLE IF NOT EXISTS materia (
        Professor TEXT,
        Tipo_de_Ensino TEXT,
        Turma TEXT,
        Disciplina TEXT
      )
    `);

    // Insere os dados na tabela 'aluno'
    await db.exec(`
      CREATE TABLE IF NOT EXISTS aluno (
        Aluno TEXT,
        Turma TEXT
      )
    `);

    // Inicia uma transação
    await db.run('BEGIN');

    // Insere os dados na tabela 'materia'
    for (const row of jsonData1) {
      await db.run(
        `INSERT INTO materia (Professor, Tipo_de_Ensino, Turma, Disciplina) VALUES (?, ?, ?, ?)`,
        row.Professor,
        row['Tipo de Ensino'],
        row.Turma,
        row.Disciplina
      );
    }

    // Insere os dados na tabela 'aluno'
    for (const row of jsonData2) {
      await db.run(
        `INSERT INTO aluno (Aluno, Turma) VALUES (?, ?)`,
        row.Aluno,
        row.Turma
      );
    }

    // Finaliza a transação
    await db.run('COMMIT');

    // Retorna uma resposta de sucesso
    return new Response(JSON.stringify({ message: 'Dados salvos com sucesso' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao processar os arquivos:', error);
    return new Response(JSON.stringify({ error: 'Erro interno do servidor' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
