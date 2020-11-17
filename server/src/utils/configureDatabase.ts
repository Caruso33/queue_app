import connectRedis from "connect-redis"
import session from "express-session"
import { RedisPubSub } from "graphql-redis-subscriptions"
import Redis from "ioredis"
import { Connection, ConnectionOptions, createConnection } from "typeorm"

const ormConfig: ConnectionOptions = require("../../ormconfig")

export default async function configureDB() {
  const orm = await createConnection(ormConfig)

  const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT as string),
  })

  const RedisStore = connectRedis(session)

  const redisStore = new RedisStore({ client: redisClient })
  const redisPubsub = new RedisPubSub()

  return { redisStore, redisClient, redisPubsub, orm }
}

export interface ConfigureDBInterface {
  redisStore: connectRedis.RedisStore
  redisClient: Redis.Redis
  redisPubsub: RedisPubSub
  orm: Connection
}
