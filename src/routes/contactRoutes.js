import express from "express";
import { handleContactForm } from "../controllers/contactController.js";
import { bookNow } from "../controllers/bookNowController.js";
import { basicAuth } from "../middleware/basicAuth.js";

const router = express.Router();

router.post("/contact", basicAuth, handleContactForm);
router.post("/booknow",basicAuth, bookNow);

export default router;
