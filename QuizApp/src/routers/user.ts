// Redirect request to particular controller
import express from 'express'
import { getUser, updateUser } from '../controllers/user'

const router = express.Router()

//User Should be authentic and authorized

// Get /user/:userId
router.get('/:userId', getUser);

// Put /user/
router.put('/', updateUser);

export default router