import firebase from '../firebase';

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(400).json({
      message: 'Provide a Token',
      data: undefined,
      error: true,
    });
  }
  try {
    const response = await firebase.auth().verifyIdToken(token);
    req.headers.firebaseUid = response.user_id;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

export default { verifyToken };