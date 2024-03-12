import express from "express";
import {
  authorization,
  isAuthenticated,
} from "../middleware/authmiddleware.js";

import {
  createuser,
  deleteuser,
  forgotpassword,
  getalluser,
  getdetail,
  getsingleuser,
  login,
  logout,
  resetpassword,
  updatepassword,
  updateuserprofile,
  updateuserrole,
} from "../controller/usercontroller.js"
import upload from "../middleware/multer.middleware.js";
const router = express.Router();
router.route("/register").post(upload.single("profile"), createuser);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/me").get(isAuthenticated, getdetail);

router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword").post(resetpassword);
router.route("updatepassword").put(isAuthenticated, updatepassword);
router
  .route("/getalluser")
  .get(isAuthenticated, authorization("admin"), getalluser);
router
  .route("/getsingleuser/:id")
  .get(isAuthenticated, authorization("admin"), getsingleuser);
router.route("/updateprofile").put(isAuthenticated, updateuserprofile);
router
  .route("/updaterole/:id")
  .put(isAuthenticated, authorization("admin"), updateuserrole);
router
  .route("/deleteuser/:id")
  .delete(isAuthenticated, authorization("admin"), deleteuser);

export default router;
