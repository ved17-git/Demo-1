import { log } from "console";
import { User } from "../Models/userModel.js";
import { generateToken } from "../utils/token.js";
import bcrypt from 'bcrypt';

// SIGN UP 
export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Enter all details" });
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashed,
        });

        if (user) {
            const token = generateToken(user);
            res.cookie('token', token);
            return res.status(200).json({
                message: "User created successfully",
                data: user,
            });
        }

    } 
    catch (error) {
        console.log('SignUp Error', error);
        return res.status(500).json({ message: "SignUp Error" });
    }
};




// LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Enter valid details",
        });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const check = await bcrypt.compare(password, user.password);

        if (check) {
            const token = generateToken(user);
            res.cookie('token', token);

            return res.status(200).json({
                message: "Logged in successfully",
                data: {
                    _id: user._id,
                    email: user.email,
                },
            });
        } else {
            return res.status(400).json({
                message: "Wrong credentials",
            });
        }

    } 
    catch (error) {
        console.log("Login Error", error);
        return res.status(500).json({ message: "Login Error" });
    }
};



//DELETE USER

export const deleteUser= async (req,res)=>{
const _id=req.params.id

try {
    const user=await User.findByIdAndDelete({_id})

    if(user){
        return res.status(200).json({message:"Deleted Successfully"})
    }else{
        return res.status(500).json({message:"Cannot Delete"})
    }

} catch (error) {
    console.log("delete Error", error);
    return res.status(500).json({ message: "delete Error" });
}
}


//UPDATE USER 

export const updateUser=async(req,res)=>{
    const _id=req.params.id
    const {name,email,password}=req.body

  try {
    const user=await User.findByIdAndUpdate(_id,{name,email,password})

    if(user){
        return res.status(200).json({message:"User Updated Successfully",updateUser:user})
    }else{
        return res.status(500).json({message:"User not Found"})
    }
  } catch (error) {
    console.log("update Error", error);
    return res.status(500).json({ message: "update Error" });
  }


}




//GET ALL USERS
export const getUsers=async(req,res)=>{
    const users=await User.find()
   
    try {
        if(users){
            res.status(200).json({message:"All the users", data:users})
        }else{
            res.status(200).json({message:"No users found",})
        }
        
    } catch (error) {
        console.log('get users error', error);
        res.status(500).json({message:"error getting users"})
    }

}



//GET BY ID
export const getById = async (req,res)=>{
const _id=req.params.id


try {
    const userById=await User.findOne({_id})

    if(userById){
        res.status(200).json({message:"User By Id", data:userById})
    }else{
        res.status(200).json({message:"No user found",})
    }
    
} catch (error) {
    console.log('get users error', error);
    res.status(500).json({message:"error getting users"})
}

}




// LOGOUT
export const logout = (req, res) => {
    try {
        res.clearCookie('token'); 
        return res.status(200).send('Logout successful');
    } 
    catch (error) {
        console.log('Logout Error', error);
        return res.status(500).json({ message: "Logout Error" });
    }
};



