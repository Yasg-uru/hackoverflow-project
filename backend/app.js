import express from "express";
import cookieParser from "cookie-parser";
import legalRouter from "./router/legalrouter.js"
const app=express();
app.use("/api/legal",legalRouter);


export default app;
