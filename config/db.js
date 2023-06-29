const mongoose = require('mongoose')

const connectDB = async () => {
    
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log(`connected to monogoose ${mongoose.connection.host}`)
    }
    catch(error){
       console.log('db connection error')
    }
}

module.exports = connectDB;

