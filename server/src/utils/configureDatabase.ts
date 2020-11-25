import connectRedis from "connect-redis"
import session from "express-session"
import { RedisPubSub } from "graphql-redis-subscriptions"
import Redis from "ioredis"
import { Connection, ConnectionOptions, createConnection } from "typeorm"

const ormConfig: ConnectionOptions = require("../../ormconfig")

export default async function configureDB() {
  const orm = await createConnection(ormConfig)

  const host = process.env.REDIS_HOST
  const port = parseInt(process.env.REDIS_PORT as string)

  const redisClient = new Redis({ host, port })

  const RedisStore = connectRedis(session)

  const redisStore = new RedisStore({ client: redisClient })
  const redisPubsub = new RedisPubSub({
    publisher: redisClient,
    subscriber: redisClient,
  })

  return { redisStore, redisClient, redisPubsub, orm }
}

export interface ConfigureDBInterface {
  redisStore: connectRedis.RedisStore
  redisClient: Redis.Redis
  redisPubsub: RedisPubSub
  orm: Connection
}
