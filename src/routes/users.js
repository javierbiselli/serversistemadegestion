import express from "express";
import usersController from "../controllers/users";

const router = express.Router();

router.get("/:firebaseUid", usersController.getUserById);

export default router;
