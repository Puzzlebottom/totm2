import knexfile from "./knexfile.js"
import knex from "knex"

process.env.npm_package_type='module';

const config = knexfile["development"];
export const database = knex(config);