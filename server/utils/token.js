import jwt from 'jsonwebtoken';

export const generateToken=(user)=>{
    return jwt.sign({
        email:user.email,
        _id:user._id
      },process.env.PrivateKey,{ expiresIn: '1h' })
}

