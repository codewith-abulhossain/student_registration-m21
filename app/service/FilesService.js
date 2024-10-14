import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// for single file upload
export const UploadSingleFileService = async (req) => {
  try {
    const uploadedFile = req.files.file;

    const uploadPath = path.join(
      __dirname,
      "../../uploads",
      Date.now() + "-" + uploadedFile.name,
    );

    await uploadedFile.mv(uploadPath, (err) => {
      if (err) {
        return {
          status: true,
          data: "Error occurred while uploading the file.",
        };
      }
    });
    return { status: true, data: "File uploaded successfully!" };
  } catch (err) {
    return { status: false, data: err.toString() };
  }
};

//! upload multiple images
export const UploadMultipleFilesServices = async (req) => {
  try {
    let files = req.files.file;
    for (let i = 0; i < files.length; i++) {
      const uploadPath = path.join(
        __dirname,
        "../../uploads",
        Date.now() + "-" + files[i].name,
      );
      files[i].mv(uploadPath, (err) => {
        if (err) {
          return {
            status: true,
            data: "Error occurred while uploading the file.",
          };
        }
      });
    }
    return { status: true, data: "File uploaded successfully!" };
  } catch (err) {
    return { status: false, data: err.toString() };
  }
};

// getUploadFileService
export const ReadFileService = (req, res) => {
  try {
    const filename = req.params.fileName;
    const filePath = path.join(__dirname, "../../uploads", filename);
    return filePath;
  } catch (err) {
    return { status: false, data: err.toString() };
  }
};

// deleteSingleFileService
export const DeleteSingleFileService = (req, res) => {
  try {
    const filename = req.params.fileName;
    const filePath = path.join(__dirname, "../../uploads", filename);
    fs.unlink(filePath, (err) => {
      if (err) {
        res.status(500).send("Error Deleting File");
      }
    });
    return { status: true, data: "File deleted successfully!" };
  } catch (err) {
    return { status: false, data: err.toString() };
  }
};
