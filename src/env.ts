import { config } from "dotenv"

config()
export const {
    PORT,
    DB_DRIVER, 
    HERBIFY_DB_USER,
    HERBIFY_DB_PASSWORD,
    HERBIFY_DB_NAME,    
    NODE_ENV
} = process.env

