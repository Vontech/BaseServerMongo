import express from 'express';
import userController from '../controllers/users.controller'

const router = express.Router();

router.post('/logout', userController.logoutUser);

export default router;