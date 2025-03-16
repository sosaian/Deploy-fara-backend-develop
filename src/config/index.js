import connectDB from "./db.config.js"
import envConfig from "./env.config.js"

export const config = {
    env: envConfig.NODE_ENV,
    port: envConfig.PORT,
    connectDB: connectDB,
    secretJWTKey: envConfig.SECRET_JWT_KEY,
    saltRounds: envConfig.SALT_ROUNDS,
}
