const express = require("express");
const fileUploadRouter = express.Router();
const { upload } = require("../middleware/multer");
const { uploadFileController } = require("../controllers/uploadController");
fileUploadRouter.post("/upload", upload.single("file"), uploadFileController);

module.exports = fileUploadRouter;
