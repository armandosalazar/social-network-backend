const jwt = require('jsonwebtoken');

module.exports = function verifyToken(req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({
      message: 'Unauthorized!',
      code: res.statusCode,
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, 'secret');

    req.user = payload;

    next();
  } catch (error) {
    console.error(error);

    res.status(401).json({
      message: 'Unauthorized!',
      code: res.statusCode,
    });
  }
};
