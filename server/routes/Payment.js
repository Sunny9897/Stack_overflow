import express from 'express';
import { packPayment } from '../controllers/payment.js';


const router=express.Router();
router.post('/pay',packPayment)
export default router