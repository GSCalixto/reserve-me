import 'dotenv/config';
import { Pool } from 'pg';

async function connect() {
  if (global.connection) {
    return await global.connection.connect();
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const client = await pool.connect();
  console.log('pool de conexão criado');

  const res = await client.query('SELECT NOW()');
  console.log( res.rows[0] );
  client.release();

  global.connection = pool;
  return await pool.connect();
}

connect();

async function selecionaRestaurante() {

  const cliente = await connect();
  const restaurante = await cliente.query("SELECT * FROM restaurante");
  const res = restaurante.rows;
  return res;
}

export { selecionaRestaurante, connect };
 

// This code sets up a connection pool to a PostgreSQL database using the 'pg' library.