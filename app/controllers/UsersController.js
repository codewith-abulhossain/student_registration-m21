import {
  StudentLoginService,
  StudentReadProfileService,
  StudentRegistrationService,
  StudentUpdateProfileService,
} from "../service/UserService.js";

export const StudentRegistration = async (req, res) => {
  let result = await StudentRegistrationService(req);
  return res.json(result);
};

// User Login
export const StudentLogin = async (req, res) => {
  let result = await StudentLoginService(req);
  return res.json(result);
};

// User Profile Read
export const StudentReadProfile = async (req, res) => {
  let result = await StudentReadProfileService(req);
  return res.json(result);
};

// User Update Profile
export const StudentUpdateProfile = async (req, res) => {
  let result = await StudentUpdateProfileService(req);
  return res.json(result);
};
