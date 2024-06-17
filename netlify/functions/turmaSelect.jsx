const sqlite3 = require('sqlite3').verbose();
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const dbPath = path.join(__dirname, '../../public/uploads/escola.db');
    const db = new sqlite3.Database(dbPath);

    const query = 'SELECT * FROM turmas';

    const turmas = await new Promise((resolve, reject) => {
      db.all(query, [], (err, rows) => {
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
      body: JSON.stringify(turmas),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Erro: ${error.message}`,
    };
  }
};
