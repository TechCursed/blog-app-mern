const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')

// 1. CREATE REGISTERED USER || POST REQUEST
exports.registerController = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      
      //VALIDATION
      if (!username || !email || !password) {
        return res.status(400).send({
          success: false,
          message: "Please Fill all fields",
        });
      }

      //CHECKING IF USER ALREADY EXISTS
      const exisitingUser = await userModel.findOne({ email });
      if (exisitingUser) {
        return res.status(401).send({
          success: false,
          message: "user already exisits",
        });
      }
       
      //hashing the password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync("B4c0/\/", salt);
      // const hashedPassword = bcrypt.hash(password,10)

      //SAVE NEW USER
      const user = new userModel({ username, email, password: hashedPassword});
      await user.save();
      return res.status(201).send({
        success: true,
        message: "New User Created",
        user,
      });
    } 
    catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "Error In Register callback",
        success: false,
        error,
      });
    }
  };

// 2. GET ALL USERS || GET Request
exports.getAllUsers = async (req,res) => {
  try{
   const users = await userModel.find({});
   return res.status(200).send({
    success: "true",
    userCount: users.length,
    message: "responded with all users data",
    users
   })
  }
  catch(error){
   return res.status(500).send({
    success: false,
    message: "Error in getting all data",
    error
   })
  }
}

// 3. LOGIN CONTROLLER || POST REQUEST
exports.loginController = () => {

}