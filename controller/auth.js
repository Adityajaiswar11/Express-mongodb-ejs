const User = require("../model/user");


const createUser = (req, res) => {
    res.render("index")
}



const postUser = async (req, res) => {
    try {
       const user = await new User(req.body);
       const {email} = user;
       const isEmailExist = await User.findOne({email});
       if(isEmailExist) return res.status(400).send('Email already exist'); 
       await user.save();
       res.redirect("/users")
      //  return res.status(201).json({message:"data stored successfully",data:savaData});
    } catch (error) {
          console.log(error)
          return res.status(500).json({message: "Internal Server Error"})
    }
   
};

const readuser = async (req, res) => {
  try {
  let user =  await User.find();
    res.render("user",{user})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error", error: error });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect("/",{user})
    // return res.status(200).json({ msg: "success", status: 200, data: user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error", error: error, status: 400 });
  }
};
const deleteById = async(req, res) => {
  try {
    const id = req.params.id;
  await User.findByIdAndDelete(id);
   return res.redirect("/read")
    // return res
    //   .status(200)
    //   .json({ msg: "data deleted successfully", status: 200 });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error", error: error, status: 400 });
  }
};

const signup = (req,res)=>{
     return res.render('signup')
}

const login = (req,res)=>{
  return res.render('login')
}
module.exports = { postUser, readuser, update,signup,login ,createUser,deleteById};
