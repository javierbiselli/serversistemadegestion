import User from "../models/users";

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
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

export default {
  getUserById,
};
