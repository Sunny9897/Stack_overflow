import express from 'express'
import { getHistory, getLoginHistory } from '../controllers/LoginHistory.js';



const router=express.Router();
router.post('/loginHistory',getLoginHistory)
router.get('/getLoginHistory/:email',getHistory)


export default router