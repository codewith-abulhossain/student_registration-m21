import UserModel from "../model/usersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";

export const StudentRegistrationService = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await UserModel.create(reqBody);
    return {
      status: "Success",
      message: "User registered successfully",
      data: data,
    };
  } catch (error) {
    return { status: "Fail", message: error.toString() };
  }
};

export const StudentLoginService = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await UserModel.findOne(reqBody);
    if (data == null) {
      return res.json({ status: "Fail", message: "User not found" });
    } else {
      let token = TokenEncode(data["email"], data["_id"]);
      return {
        status: "Success",
        message: "User registered successfully",
        data: { token: token },
      };
    }
  } catch (error) {
    return { status: "Fail", message: error.toString() };
  }
};

export const StudentReadProfileService = async (req, res) => {
  try {
    let user_id = req.headers["user-id"];
    let data = await UserModel.findOne({ " _id ": user_id });
    return { status: "Success", data: data };
  } catch (error) {
    return { status: "Fail", message: error.toString() };
  }
};

export const StudentUpdateProfileService = async (req, res) => {
  try {
    let reqBody = req.body;
    let user_id = req.headers["user-id"];
    let data = await UserModel.updateOne({ _id: user_id }, reqBody);
    return {
      status: "Success",
      message: "User Update successfully",
      data: data,
    };
  } catch (error) {
    return { status: "Fail", message: error.toString() };
  }
};
