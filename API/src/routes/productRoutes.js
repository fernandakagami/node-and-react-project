import express from "express";
import ProductController from "../controllers/productController.js";
import multer from "multer";

const storage = multer.diskStorage(
  {
    destination: (req, file, cb) => {
      cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

const upload = multer({ storage });

const routes = express.Router();

routes.get("/products", ProductController.getProducts);
routes.post("/products", upload.single('file'), ProductController.createProduct);
routes.delete("/products/:id", ProductController.deleteProduct);

export default routes;