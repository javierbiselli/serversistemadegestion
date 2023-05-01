import Product from "../models/products";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate("shopId");
    return res.status(200).json({
      message: "Productos",
      data: products,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error",
      data: error,
      error: true,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await Product.create(productData);
    return res.status(201).json({
      message: "Producto agregado correctamente!",
      data: newProduct,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error",
      data: error,
      error: true,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("shopId");
    if (product) {
      return res.status(200).json({
        message: "Producto encontrado",
        data: product,
        error: false,
      });
    } else {
      return res.status(200).json({
        message: "No se pudo encontrar el producto",
        data: undefined,
        error: true,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error",
      data: error,
      error: true,
    });
  }
};

const searchProducts = async (req, res) => {
  const searchQuery = req.query.q;
  const searchWords = searchQuery.split(" ");
  const regex = new RegExp(searchWords.join("|"), "i");

  await Product.find({
    $and: [{ keywords: { $all: searchWords } }, { isActive: true }],
  })
    .populate("shopId")
    .then((products) => {
      return res.status(200).json({
        message: "Resultado de búsqueda",
        data: products.filter((product) =>
          product.keywords.join(" ").match(regex)
        ),
        error: false,
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Este producto no existe",
        data: undefined,
        error: true,
      });
    } else {
      return res.status(200).json({
        message: "Producto borrado",
        data: undefined,
        error: false,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error",
      data: error,
      error: true,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
        subCategory: req.body.subCategory,
        isActive: req.body.isActive,
        hasDiscount: req.body.hasDiscount,
        discountPercentage: req.body.discountPercentage,
        discountValidDate: req.body.discountValidDate,
        stock: req.body.stock,
        hasPromotion: req.body.hasPromotion,
        promotionMessage: req.body.promotionMessage,
        promotionValidDate: req.body.promotionValidDate,
        hasStar: req.body.hasStar,
        keywords: req.body.keywords,
      },
      { new: true }
    ).populate("shopId");
    if (!product) {
      return res.status(404).json({
        message: "El producto no existe",
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: "Producto actualizado",
      data: product,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error",
      data: error,
      error: true,
    });
  }
};

export default {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductById,
  searchProducts,
};
