import { Schema, model } from "mongoose";

import { isEmail } from "validator";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import { randomBytes, createHash } from "crypto";

const userSchema = new Schema({
    name: {
    type: String,
    required: [true, "please enter your name"],
    maxLength: [30, "name cannot have more than 30 characters"],
  },
  email: {
    type: String,
    require: [true, "please enter your email"],
    unique: true,
    valdate: [isEmail, "please enter correct email pattern"],
  },
  enrolledcourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  password: {
    type: String,
    required: [true, "pleasse enter strong password"],
    minLength: [5, "your password should we greater than or equal to 5"],
  },

  profile: {
    type: String,
  },

  role: {
    type: String,
    enum:['user','admin'],
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await hash(this.password, 10);
});

userSchema.methods.getjwtToken = function () {
  return sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
userSchema.methods.comparepassword = async function (password) {
  return await compare(password, this.password);
};
userSchema.methods.getresetpasswordToken = function () {
  const resettoken = randomBytes(20).toString("hex");
  this.resetPasswordToken = createHash("sha256")
    .update(resettoken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 60 * 1000;
  return resettoken;
};
export default model("User", userSchema);
