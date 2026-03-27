import { neon } from "@neondatabase/serverless";


export const dynamic = "force-dynamic";
export const revalidate = 0;


const sql = neon(process.env.DATABASE_URL!);

export default sql;
