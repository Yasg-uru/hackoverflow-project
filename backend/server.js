import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
  path: "backend/config/config.env",
});
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`server is running on port :${PORT}`);
});
