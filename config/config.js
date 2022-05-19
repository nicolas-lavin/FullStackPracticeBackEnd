module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE_DEVELOP,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE_TEST,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE_PRODUCTION,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
  },
  // Configurar Seeds
  // Seeds Config
  seederStorage: "sequelize",
  //seederStoragePath: "sequelizeSeeds.json",
  seederStorageTableName: "seeds",
  // Configurar Migraciones
  // Migration Settings
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
  
  define: {
    timestamps: false,
    // Genera claves foraneas de este tipo user_id en vez de userId
    // This propetie set foreign key in format "user_id"
    underscored: true
  }
};