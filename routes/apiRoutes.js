import express from "express";
import { getResponseTest, getResponse } from "../controllers/apiController.js";

const router = express.Router();

router.get("/", getResponse);
router.get("/test", getResponseTest);


export default router;
