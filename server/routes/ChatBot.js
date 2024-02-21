import express from 'express'
import {chatBot} from '../controllers/chatBot.js'
import auth from '../middlewares/auth.js'


const router =express.Router();
router.post('/chatbot',chatBot)

export default router