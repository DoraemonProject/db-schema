const SnakeNamingStrategy =
  require("typeorm-naming-strategies").SnakeNamingStrategy;

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // url: process.env.DATABASE_URL,
  synchronize: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
  options: {
    trustServerCertificate: true,
    cryptoCredentialsDetails: {
      minVersion: "TLSv1",
    },
  },
  namingStrategy: new SnakeNamingStrategy(),
};
