import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from './routes/routes.js';
import morgan from "morgan";
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
app.use('/Blog', blogRoutes);
// Static Files
// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server is working on PORT', app.get('port'));
});