const router = require('express').Router();
// Models
const User = require('../models/User');
// Middleware
const { isAuthenticated } = require('../middleware/auth');
const { getDataDeliveries } = require('../middleware/getDataDeliveries');

router.get(
  '/deliveries/getDeliveryData',
  isAuthenticated,
  getDataDeliveries,
  async (req, res) => {
    // TODO: checl if the user is a depot or warehouse worker
    // if user is warehouse worker he can't access this route
    return res.send({ reponse: req.deliveryObject });
  }
);

router.post('/deliveries', getDataDeliveries, async (req, res) => {
  userId = 22;

  //   req.deliveryObject;

  const user = await User.query().select().where({ id: userId });

  if (user[0].warehouse_id === null) {
    return res.send({ reponse: user[0] });
  } else {
    return res.status(401).send({ response: 'Not authorized' });
  }
});

module.exports = router;
