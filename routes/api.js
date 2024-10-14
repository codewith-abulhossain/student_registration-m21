import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js";
import * as FileController from "../app/controllers/FileController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

// Users
router.post("/StudentRegistration", UsersController.StudentRegistration);
router.post("/StudentLogin", UsersController.StudentLogin);
router.get(
  "/StudentReadProfile",
  AuthMiddleware,
  UsersController.StudentReadProfile,
);
router.post("/StudentUpdateProfile", UsersController.StudentUpdateProfile);

// File
router.post("/UploadSingleFile", FileController.UploadSingleFile);
router.post("/UploadMultipleFiles", FileController.UploadMultipleFiles);
router.get("/ReadFile", FileController.ReadFile);
router.delete("/DeleteSingleFile", FileController.DeleteSingleFile);

export default router;
