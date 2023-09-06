// Redirect request to particular controller
import express from 'express'
import { registerUser, getUser, updateUser } from '../controllers/user'

const router = express.Router()

// Post /user/
router.post('/', registerUser);

// Get /user/:userId
router.get('/:userId', getUser);

// Put /user/
router.put('/', updateUser);

export default router