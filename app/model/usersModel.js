import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    mobileNumber: { type: String },
    password: { type: String, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const UserModel = mongoose.model("Students", UserSchema);
export default UserModel;
