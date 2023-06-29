const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv')

//rest object
const app = express();

//dotenv config
dotenv.config()

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
const PORT = process.env.PORT || 8080
app.get('/', (req,res) => {
    res.status(200).send({
    message : "node server"
    })
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})