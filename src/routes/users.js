import express from "express";
import usersController from "../controllers/users";
import authMiddleware from "../middlewares/auth";

const router = express.Router();

router
  .get(
    "/uid/:firebaseUid",
    authMiddleware.verifyToken,
    usersController.getUserByUId
  )
  .get("/id/:id", authMiddleware.verifyToken, usersController.getUserById)
  .put("/:id", authMiddleware.verifyToken, usersController.updateUserShop);
export default router;
