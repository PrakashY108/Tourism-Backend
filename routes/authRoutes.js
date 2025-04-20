import express from "express";
import authController from "../controllers/authController.js";
import validateFields from "../middleware/validateFields.js";
import { loginSchema, registerSchema, resetPasswordSchema, verifyOtpSchema } from "../schemas/authSchema.js";
import { validateUserToken } from "../middleware/validateUserToken.js";

const router = express.Router();

router.post("/login", validateFields(loginSchema), authController.login);
router.post("/register", validateFields(registerSchema), authController.register);
router.post("/update-profile",validateUserToken, authController.updateProfile);
router.post("/reset-password", validateFields(resetPasswordSchema),validateUserToken, authController.resetPassword);
router.post("/verify-otp", validateFields(verifyOtpSchema),validateUserToken, authController.VerifyOtp);


export default router;
