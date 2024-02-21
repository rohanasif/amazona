import { authUsers , getUserProfile , registerUser , updateUserProfile , getUser  , deleteUser , getUserById , updateUser } from "../controllers/userControllers.js";
import express from "express";
import { protect , admin } from "../middleware/authMiddleware.js";
const router = express.Router();


router.post('/login', authUsers)
router.route('/profile').get(protect, getUserProfile).put(protect , updateUserProfile)
router.route('/').post(registerUser)
router.route('/').post(registerUser).get(protect, admin, getUser)
router.route("/:id").delete(protect, admin, deleteUser);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router