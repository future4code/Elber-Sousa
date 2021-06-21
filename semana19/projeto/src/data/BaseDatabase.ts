import Knex from 'knex'
import knex from 'knex'

export class baseDatabase {

   protected connection: Knex = knex ({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: 3306,
            database: process.env.DN_NAME
        }
    })

}