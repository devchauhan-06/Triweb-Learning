// Redirect request to particular controller
import express from 'express';
import { getUser, updateUser } from '../controllers/user';
import { isAuthenticated } from '../middlewares/isAuth';

const router = express.Router()

//User Should be authentic and authorized --> We will use middleware for get and post method before forwarding request to controller

// Get /user/:userId
router.get('/:userId', isAuthenticated, getUser);

// Put /user/
router.put('/', isAuthenticated, updateUser);

export default router