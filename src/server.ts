// import { sequelizeConnection } from '@db/index'
import { DB, getDBInstance } from "./db/index";

const createConnection = getDBInstance;
createConnection();
