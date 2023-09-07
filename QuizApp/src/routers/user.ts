// Redirect request to particular controller
import express from 'express'
import { registerUser, getUser, updateUser, loginUser } from '../controllers/user'

const router = express.Router()

// Post /user/
router.post('/', registerUser);

// Post /user/
router.post('/login', loginUser);

// Get /user/:userId
router.get('/:userId', getUser);

// Put /user/
router.put('/', updateUser);

export default router