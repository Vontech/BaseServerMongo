import express from 'express';
import userController from '../controllers/users.controller';
import eventController from '../controllers/events.controller';

const router = express.Router();

// User routes
router.post('/logout', userController.logoutUser);

// Event routes
router.post('/event', eventController.createEvent);
router.get('/event', eventController.getEvents);

export default router;