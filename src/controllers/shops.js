import Shop from "../models/shops";

const getShops = async (req, res) => {
  try {
    const shops = await Shop.find({}).populate("owner", ["name"]);
    return res.status(200).json({
      message: "Tiendas",
      data: shops,
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

const getShopById = async (req, res) => {
  try {
    const shop = await Shop.findById(req.params.id).populate("owner", ["name"]);
    if (shop) {
      return res.status(200).json({
        message: "Tienda encontrada",
        data: shop,
        error: false,
      });
    } else {
      return res.status(200).json({
        message: "No se pudo encontrar la tienda",
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

const createShop = async (req, res) => {
  try {
    const shopData = req.body;
    const newShop = await Shop.create(shopData);
    return res.status(201).json({
      message: "Tienda agregada correctamente!",
      data: newShop,
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

const updateShop = async (req, res) => {
  try {
    const shop = await Shop.findByIdAndUpdate(
      req.params.id,
      {
        shopName: req.body.shopName,
        shopAddress: req.body.shopAddress,
        shopTel: req.body.shopTel,
        shopDescription: req.body.shopDescription,
        shopSchedule: req.body.shopSchedule,
        shopExtraInfo: req.body.shopExtraInfo,
        active: req.body.active,
        owner: req.body.owner,
        shopIcon: req.body.shopIcon,
      },
      { new: true }
    );
    if (!shop) {
      return res.status(404).json({
        message: "La tienda no existe",
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: "Tienda actualizada",
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
  getShops,
  getShopById,
  createShop,
  updateShop,
};
