import User from "../models/User.js";

export async function signup(req,res){
  try {
    const {name,email,password} = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({success:false,message:"Please fill all the fields"});
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({success:false,message:"Invalid email format"});
    }

    if (password.length < 6) {
      return res.status(400).json({success:false,message:"Password must be at least 6 characters long"});}

    const existingUserByEmail = await User.findOne({email:email});
    if (existingUserByEmail) {
      return res.status(400).json({success:false,message:"User with this email already exists"});
    }

    const existingUserByUserName = await User.findOne({name:name});
    
    if (existingUserByUserName) {
      return res.status(400).json({success:false,message:"User with this name already exists"});
    }

    const newUser = new User({
      email:email,
      password:password,
      username:username,
    });
  } catch (error) {
    
  }
}

export async function login(req,res){
  res.send("login route");
}

export async function logout(req,res){  
  res.send("logout route");
}