import { authUsers , getUserProfile , registerUser } from "../controllers/userControllers.js";
import express from "express";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();


router.post('/login', authUsers)
router.route('/profile').get(protect, getUserProfile);
router.route('/').post(registerUser)
export default router