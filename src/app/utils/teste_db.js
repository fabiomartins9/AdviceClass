//import { getDatabaseConnection } from '@/app/utils/db';
const { getDatabaseConnection } = require('./db')

(async () => {
  try {
    const db = await getDatabaseConnection();
    console.log("Database Connected");

    const queryDiretores = `SELECT * FROM diretor`;
    const queryCoordenadores = `SELECT * FROM coordenadores`;

    const diretores = await db.all(queryDiretores);
    const coordenadores = await db.all(queryCoordenadores);

    console.log("Diretores: ", diretores);
    console.log("Coordenadores: ", coordenadores);
  } catch (error) {
    console.error("Error Fetching Data:", error);
  }
})();
