// import { sequelizeConnection } from '@db/index'
import { DB } from './db/index'


const createConnection = new DB()
createConnection.authenticate()

