import express from 'express'
import { signUp,logout,login,getUsers,getById,deleteUser, updateUser } from '../Controller/userController.js'
import { log } from 'console'
const router=express.Router()

router.post('/signUp',signUp)

router.post('/login', login)

router.post('/logout', logout)

router.post('/delete/:id',deleteUser)

router.post('/update/:id',updateUser)

router.get('/users', getUsers)

router.get('/users/:id',getById)




export default router