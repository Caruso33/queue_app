const path = require("path")

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,

  logging: process.env.DB_LOGGING === "true",
  synchronize: process.env.DB_SYNCHRONIZE === "true",

  entities: [path.join(__dirname, "dist/entities/*.js")],
  migrations: [path.join(__dirname, "dist/migrations/*.js")],
}
