const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

const isAuthenticated = async (req, res, next) => {
  const error = new Error('Unauthorized');
  error.status = 401;

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ response: 'Not authorized' });
  }

  const data = jwt.verify(token.replace('Bearer ', ''), 'mysecretkey');

  if (!data) {
    return res.status(401).send({ response: 'Not authorized' });
  }

  const tokenFound = await Token.query().select().where({ token: token });
  // console.log(token, tokenFound[0]);
  if (!tokenFound[0]) {
    return res.status(401).send({ response: 'Not authorized' });
  }

  const comparisonDate = new Date();

  if (
    tokenFound[0].created_at.getTime() + tokenFound[0].ttl <
    comparisonDate.getTime()
  ) {
    return res.status(401).send({ response: 'Not authorized' });
  } else {
    req.userId = tokenFound[0].user_id;
    return next();
  }
};

module.exports = { isAuthenticated };
