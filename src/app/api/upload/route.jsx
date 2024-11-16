import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

export async function POST(req) {
  try {
    const body = await req.json(); // Lê o corpo da requisição
    const { filePath } = body;

    if (!filePath) {
      return NextResponse.json(
        { message: 'File path is missing' },
        { status: 400 }
      );
    }

    const iniFilePath = path.join(process.cwd(), 'src/app/utils/config.ini');

    // Grava o caminho no arquivo .ini
    const config = {
      paths: {
        databasePath: filePath,
      },
    };

    fs.writeFileSync(iniFilePath, ini.stringify(config), 'utf-8');

    // Retorna uma resposta de sucesso
    return NextResponse.json(
      { message: 'File path saved in .ini file' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error writing to .ini file: ${error.message}` },
      { status: 500 }
    );
  }
}
