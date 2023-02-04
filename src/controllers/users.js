import User from "../models/users";

const getUserByUId = async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUid: req.params.firebaseUid });
    if (user) {
      return res.status(200).json({
        message: "Usuario encontrado",
        data: user,
        error: false,
      });
    } else {
      return res.status(200).json({
        message: "No se pudo encontrar el usuario",
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

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("shopId");
    if (user) {
      return res.status(200).json({
        message: "Usuario encontrado",
        data: user,
        error: false,
      });
    } else {
      return res.status(200).json({
        message: "No se pudo encontrar el usuario",
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

const updateUserShop = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        shopId: req.body.shopId,
        firebaseUid: req.body.firebaseUid,
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        message: "El usuario no existe",
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: "Usuario actualizado",
      data: user,
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
  getUserByUId,
  getUserById,
  updateUserShop,
};
