import express from "express";
import cors from "cors";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.log(error);
});

connection.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
})

const app = express();
app.use('/public', express.static('public'));
app.use(cors());
routes(app);

export default app;

