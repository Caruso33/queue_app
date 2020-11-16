const path = require("path")

module.exports = {
  type: process.env.DB_TYPE,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: process.env.DB_LOGGING === 'true',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',,
  entities: [path.join(__dirname, "..", "./entities/*")],
  migrations: [path.join(__dirname, "..", "./migrations/*")],
}
