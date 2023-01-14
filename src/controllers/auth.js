import User from "../models/users";
import firebaseApp from "../firebase";

const getAuth = async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUid: req.headers.firebaseUid });
    if (user) {
      return res.status(201).json({
        message: "Usuario encontrado",
        data: user,
        error: false,
      });
    }
    return res.status(404).json({
      message: "User not found",
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

const register = async (req, res) => {
  let firebaseUid;
  try {
    const newFirebaseUser = await firebaseApp.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });
    firebaseUid = newFirebaseUser.uid;

    await firebaseApp
      .auth()
      .setCustomUserClaims(newFirebaseUser.uid, { role: "USER" });

    const newUser = await User.create({
      firebaseUid: newFirebaseUser.uid,
      name: req.body.name,
      email: req.body.email,
      shopName: req.body.shopName,
      shopAddress: req.body.shopAddress,
      shopTel: req.body.shopTel,
      shopDescription: req.body.shopDescription,
      shopSchedule: req.body.shopSchedule,
      shopExtraInfo: req.body.shopExtraInfo,
    });
    return res.status(201).json({
      message: "Usuario creado con exito",
      data: newUser,
      error: false,
    });
  } catch (error) {
    if (firebaseUid) {
      await firebaseApp.auth().deleteUser(firebaseUid);
    }
    return res.status(400).json({
      message: error.message,
      data: undefined,
      error: true,
    });
  }
};

export default { getAuth, register };
