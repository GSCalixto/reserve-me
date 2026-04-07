// Eventualmente terei que modularizar as responsabilidades dessa bosta

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
};

connect();

async function selecionaRestaurante() {
  const cliente = await connect();
  
  try {
    const restaurante = await cliente.query("SELECT * FROM restaurante");
    const res = restaurante.rows;
    return res;
  } finally {
    cliente.release();
  };
};

async function cadastraRestaurante(nome, email_address) {
  const cliente = await connect();

  try {
    const texto = `INSERT INTO restaurante (name, email_address) VALUES ($1, $2) RETURNING *`;
    const values = [nome, email_address];
    const result = await cliente.query(texto, values);
    return result.rows[0];
  } finally {
    cliente.release();
  };
};

async function deletarRestaurante(id) {
  const cliente = await connect();

  try {
    const texto = `DELETE FROM restaurante WHERE id = $1 RETURNING *`;
    const values = [id];
    const result = await cliente.query(texto, values);
    return result.rows[0];
  } finally {
    cliente.release();
  };
};

export { selecionaRestaurante, cadastraRestaurante, deletarRestaurante, connect };
 

// This code sets up a connection pool to a PostgreSQL database using the 'pg' library.