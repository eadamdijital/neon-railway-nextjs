import { neon } from "@neondatabase/serverless";


export const dynamic = "force-dynamic";


const sql = neon(process.env.DATABASE_URL!);

export default sql;
