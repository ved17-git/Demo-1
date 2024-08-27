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
