const sqlite3 = require('sqlite3').verbose();
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const dbPath = path.join(__dirname, '../../public/uploads/escola.db');
    const db = new sqlite3.Database(dbPath);

    const queryCoordenadores = 'SELECT * FROM coordenadores';
    const queryDiretores = 'SELECT * FROM diretores';

    const coordenadores = await new Promise((resolve, reject) => {
      db.all(queryCoordenadores, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    const diretores = await new Promise((resolve, reject) => {
      db.all(queryDiretores, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    db.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ coordenadores, diretores }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Erro: ${error.message}`,
    };
  }
};
