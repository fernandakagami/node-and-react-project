import product from "../models/Product.js";

class ProductController {

  static async getProducts(req, res) {
    const products = await product.find({});
    res.status(200).json(products);
  };

  static async createProduct(req, res) {
    try {
      const newProduct = await product.create({
        name: req.body.name,
        value: req.body.value,
        score: req.body.score,
        file: req.file.filename,
        path: req.file.path
      });
      res.status(201).send({ message: "Product created", product: newProduct });
    }
    catch (error) {
      res.status(500).json({ message: `${error.message} - create product failed` })
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = req.params.id
      await product.findByIdAndDelete(id);
      res.status(200).json({ message: "Product deleted" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - delete product failed` })
    }
  }
};

export default ProductController;