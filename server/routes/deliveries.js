const router = require('express').Router();
// Models
const User = require('../models/User');
const Token = require('../models/Token');
const Deliveries = require('../models/Deliveries');
const Warehouse = require('../models/Warehouse');
const Company = require('../models/Company');
// Bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
// JWT
const jwt = require('jsonwebtoken');
// Middleware
const { isAuthenticated } = require('../middleware/auth');

router.get('/deliveryData', async (req, res) => {
  let deliveryObject = {};
});

