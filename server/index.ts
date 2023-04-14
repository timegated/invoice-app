import express from 'express';
import { Client } from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as routes from './routes/index';


require('dotenv').config();


const app = express();
const PORT = 3001;

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePort = 5432;
const supabaseDbName = 'postgres';
const supabaseUser = 'postgres';
const supabasePassword = process.env.SUPABASE_POSTGRES;

export const client = new Client({
  host: supabaseUrl,
  port: supabasePort,
  database: supabaseDbName,
  user: supabaseUser,
  password: supabasePassword,
  ssl: { rejectUnauthorized: false },
});

client.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', routes.router);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});