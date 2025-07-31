import { Router } from "express";
import { postContact } from "../controllers/contact.controller";
import { handleValidationErrors } from "../middlewares/validate";
import { validateContact } from "../middlewares/contact.validator";

const router = Router();

router.post("/", validateContact, handleValidationErrors, postContact);

export default router;
