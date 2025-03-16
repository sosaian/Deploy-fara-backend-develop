// Export de-structured values of variables with default values
// (e.g. if they are not defined in .env)

const {
    NODE_ENV = NODE_ENV || "development",
    PORT = PORT || 3000,
    DATABASE_URI,
    SECRET_JWT_KEY,
} = process.env

//  This is the way to export an individual env variable that needs conversion.
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 11

// Verify that critical variables are actually defined
if (!NODE_ENV || !PORT || !SECRET_JWT_KEY || !SALT_ROUNDS || !DATABASE_URI) {
    throw new Error("Missing required variables in .env file.")
}

const envConfig = {
    NODE_ENV,
    PORT,
    DATABASE_URI,
    SECRET_JWT_KEY,
    SALT_ROUNDS,
}

export default envConfig
