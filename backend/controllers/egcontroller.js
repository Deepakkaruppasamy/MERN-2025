const user=require('../models/userModel')
const bcrypt = require('bcrypt')

exports.getRoute= async (req, res) => {
    const userData=await user.find();
    res.status(201).json({data:userData})
   
}

exports.getRouteById = async(req,res)=>{
    const userData = await user.findById(req.params.id);
    res.status(201).json({userData})
}

exports.signupRoute = async (req, res) => {
  const { username, password } = req.body;
  const exist = await user.findOne({ username });
  if (exist)
    return res.status(401).json({ message: "user already exist" });

  else {
    const hashedPassword = await bcrypt.hash(password, 10); // ← just add await
    const newUser = new user({ username, password: hashedPassword }); // ← use hashedPassword
    await newUser.save();
    res.status(201).json({ user: newUser });
  }
};


exports.loginRoute = async (req, res) => {
  const { username, password } = req.body;
  const userData = await user.findOne({ username });

  if (!userData) return res.status(401).json({ message: "User not exist" });

  const valid = await bcrypt.compare(password, userData.password);

  if (!valid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  res.status(200).json({ message: "Login successful", user: { _id: userData._id, username: userData.username } });
};



exports.putRoute=async(req,res)=>{
   
    const update =await user.findByIdAndUpdate(req.params.id,req.body)
    if(!update) return res.status(401).json({message:"user not exist"})
    res.status(201).json({message:"success"})
  
}
exports.deleteRoute=async(req,res)=>{
    const deleteUser =await user.findByIdAndDelete(req.params.id)
    if(!deleteUser) return res.status(401).json({message:"user not exist"})
    res.status(201).json({message:"user deleted"})
}