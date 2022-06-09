// Imports
const express = require("express");
const { sequelize } = require('./models/index'); 
// Middlewares Imports
const morgan = require("morgan");
const cors = require('cors');
// Initializations
const app = express();
// Settings
app.set('port', process.env.PORT || 4000);
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
// Global Variables

// Authentications Routes
app.use('/auth', require('./routes/AuthRoutes'));
// Routes
app.use('/person', require('./routes/PersonRoutes'));
app.use('/registration', require('./routes/RegistrationRoutes'));
app.use('/types/person', require('./routes/TypePersonRoutes'));
// Static Files
// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server is working on PORT', app.get('port'));
    sequelize.authenticate().then(db => console.log('DB is connected')).catch(err => console.error(err));
});