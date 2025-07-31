"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const validate_1 = require("../middlewares/validate");
const contact_validator_1 = require("../middlewares/contact.validator");
const router = (0, express_1.Router)();
router.post("/", contact_validator_1.validateContact, validate_1.handleValidationErrors, contact_controller_1.postContact);
exports.default = router;
