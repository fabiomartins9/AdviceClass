const sqlite3 = require('sqlite3').verbose();
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const nomeTurma = event.queryStringParameters.nomeTurma;

  try {
    const dbPath = path.join(__dirname, '../../public/uploads/escola.db');
    const db = new sqlite3.Database(dbPath);

    const query = `SELECT cabecalho, tipoEnsino FROM cabecalhos WHERE nomeTurma = ?`;

    const data = await new Promise((resolve, reject) => {
      db.get(query, [nomeTurma], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });

    db.close();

    if (!data) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Cabeçalho não encontrado' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Erro: ${error.message}`,
    };
  }
};
