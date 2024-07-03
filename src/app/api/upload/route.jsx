import { NextResponse } from 'next/server';
import { setDatabasePath } from '@/app/utils/db';

export const config = {
  runtime: 'edge', // Configuração para executar no Edge Runtime
};

export async function POST(req) {
  try {
    const { path } = await req.json();

    if (!path) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 });
    }

    // Validação básica para garantir que o caminho seja plausível
    if (!path.endsWith('.db') && !path.endsWith('.sqlite')) {
      return NextResponse.json({ error: "Invalid file type. Only .db and .sqlite are allowed." }, { status: 400 });
    }

    await setDatabasePath(path);
    return NextResponse.json({ message: "Database path set successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
