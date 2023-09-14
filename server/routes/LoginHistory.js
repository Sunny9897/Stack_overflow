import express from 'express'
import { getIpAddress, getLoginHistory } from '../controllers/LoginHistory.js';



const router=express.Router();
router.post('/loginHistory',getLoginHistory)
router.post('/ipAddress',getIpAddress)
export default router