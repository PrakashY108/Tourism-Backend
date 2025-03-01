import express from "express";
import { getResponseTest, CalculateDistance } from "../controllers/apiController.js";

const router = express.Router();

router.get("/:lat1/:lon1/:lat2/:lon2", CalculateDistance);
router.get("/test", getResponseTest);

export default router;
