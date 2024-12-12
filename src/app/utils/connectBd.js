import { open } from "sqlite";
import sqlite3 from "sqlite3";
import fs from 'fs';
import path from 'path';
import ini from 'ini';

async function connectDb() {
  //const filePath = path.join(process.cwd(), 'config.ini');
  //const iniContent = fs.readFileSync(filePath, 'utf-8');
  //const config = ini.parse(iniContent);

  //console.log('Configuração do INI:', config); // Verifique o conteúdo lido
  //const pathBd = config.paths.databasePath;

  //if (!pathBd) {
   // throw new Error('O caminho para o banco de dados não está definido no arquivo config.ini.');
  //}

  try {
    // const db = await open({
    //   filename: pathBd,
    //   driver: sqlite3.Database,
    // });

    const db = await open({
      filename: process.env.DATABASE_URL.replace('sqlite://', ''),
      driver: sqlite3.Database
    });

    // Desativar o cache
    await db.exec('PRAGMA cache_size = 0;');

    return db;
  } catch (e) {
    console.error('Erro ao conectar ao banco de dados:', e);
  }
}

export default connectDb;
