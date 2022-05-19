const express = require("express");
const cors = require('cors');
const { sequelize } = require('./models/index'); 
const blogRoutes = require('./routes/routes');
const morgan = require("morgan");
// Initializations
const app = express();
// Settings
app.set('port', process.env.PORT || 4000);
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
// Global Variables

// Routes
app.use('/Blog', require('./routes/routes'));
// Static Files
// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server is working on PORT', app.get('port'));
    sequelize.authenticate().then(db => console.log('DB is connected')).catch(err => console.error(err));
});