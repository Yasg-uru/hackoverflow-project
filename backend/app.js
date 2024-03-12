import express from "express";
import cookieParser from "cookie-parser";
import legalRouter from "./router/legalrouter.js";
import userRouter from "./router/userRouter.js"
const app=express();
app.use("/api/legal",legalRouter);
app.use("/api/user",userRouter)


export default app;
