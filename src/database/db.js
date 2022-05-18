import {Sequelize} from 'sequelize';

const db = new Sequelize('database_app','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

await db.authenticate()
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

export default db;