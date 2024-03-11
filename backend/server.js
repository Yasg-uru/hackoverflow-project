import dotenv from "dotenv";
import app from "./app.js";
import connectdatabase from "./config/database.js";
dotenv.config({
  path: "backend/config/config.env",
});
connectdatabase();
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`server is running on port :${PORT}`);
});
