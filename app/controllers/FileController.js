import {
  DeleteSingleFileService,
  UploadMultipleFilesServices,
  ReadFileService,
  UploadSingleFileService,
} from "../service/FilesService.js";

export const UploadSingleFile = async (req, res) => {
  let result = await UploadSingleFileService(req.body);
  return res.status(200).json(result);
};

export const UploadMultipleFiles = async (req, res) => {
  let result = await UploadMultipleFilesServices(req.body);
  return res.status(200).json(result);
};

export const ReadFile = async (req, res) => {
  let result = await ReadFileService(req.body);
  return res.status(200).json(result);
};

export const DeleteSingleFile = async (req, res) => {
  let result = await DeleteSingleFileService(req.body);
  return res.status(200).json(result);
};
