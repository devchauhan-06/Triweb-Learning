// Redirect request to particular controller
import express from 'express'
import { registerUser, loginUser } from '../controllers/auth'

const router = express.Router()

// Post /auth/
router.post('/', registerUser);

// Post /auth/login
router.post('/login', loginUser);

export default router