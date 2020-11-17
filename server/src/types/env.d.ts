declare namespace NodeJS {
  export interface ProcessEnv {
    SERVER_PORT: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_TYPE: string;
    DB_NAME: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_LOGGING: string;
    DB_SYNCRONIZE: string;
    REDIS_HOST: string;
    REDIS_PORT: string;
    EMAIL_USER: string;
    EMAIL_PW: string;
    SESSION_SECRET: string;
    FRONTEND_DOMAIN: string;
  }
}
