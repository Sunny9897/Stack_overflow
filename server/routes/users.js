import express from 'express'
import {login,signup} from '../controllers/auth.js'
import {getAllUsers,updateProfile} from '../controllers/Users.js'
import auth from '../middlewares/auth.js';
import { updateDate } from '../controllers/auth.js';
import { updatePack } from '../controllers/auth.js';
import { getCurrentUser } from '../controllers/Users.js'
import { forgotPassword,resetPassword,updatePassword } from '../controllers/auth.js';


const router=express.Router();
router.post('/signup',signup)
router.post('/login',login)
router.get('/getAllUsers',getAllUsers)
router.patch('/update/:id',auth,updateProfile)
router.patch('/date/:id',updateDate)
router.patch('/pack/:id',updatePack)
router.get(`/getCurrentUser/:id`,getCurrentUser)
router.post('/resetPassword',forgotPassword)
router.get(`/resetPassword/:id/:token`,resetPassword)
router.post(`/resetPassword/:id/:token`,updatePassword)

export default router

