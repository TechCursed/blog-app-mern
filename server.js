const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//rest object
const app = express();

//dotenv config
dotenv.config()

//router import
const userRoutes = require('./routes/userRoutes')

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//mongodb connection
connectDB();


//routes
app.use('/api/v1/user', userRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})