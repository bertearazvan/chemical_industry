const router = require('express').Router();
// Models
const User = require('../models/User');
const Token = require('../models/Token');
// Bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
// JWT
const jwt = require('jsonwebtoken');
// Middleware
// const { isAuthenticated } = require('../middleware/auth');

router.post('/users/login', async (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    try {
      const users = await User.query()
        .where({
          username,
        })
        .limit(1);

      const user = users[0];

      if (!user) {
        return res.status(404).send({
          response: 'Wrong username',
        });
      }

      bcrypt.compare(password, user.password, async (error, isSame) => {
        if (error) {
          return res
            .status(500)
            .send({ response: 'There was an error when crypting the data' });
        }

        if (!isSame) {
          return res.status(404).send({
            response: 'Wrong password',
          });
        } else {
          const token = jwt.sign(
            {
              userId: user.id,
              username: user.username,
            },
            'mysecretkey'
          );

          const previousToken = await Token.query()
            .select()
            .where({
              user_id: user.id,
            })
            .limit(1);

          if (!previousToken[0]) {
            await Token.query().insert({
              token,
              ttl: 3600000,
              user_id: user.id,
            });
          } else {
            await Token.query()
              .where({
                user_id: user.id,
              })
              .del();
            await Token.query().insert({
              token,
              ttl: 3600000,
              user_id: user.id,
            });
          }

          return res.status(200).send({
            response: user,
            token,
          });
        }
      });
    } catch (err) {
      res.status(400).send({ response: 'Something went wrong' });
    }
  } else {
    return res.status(400).send({
      response: 'Username or password not defined',
    });
  }
});

router.post('/users/register', (req, res) => {
  const { username, password, firstName, lastName, repeatPassword } = req.body;

  if (
    username &&
    password &&
    firstName &&
    lastName &&
    repeatPassword &&
    password === repeatPassword
  ) {
    if (password.length < 8) {
      return res.status(400).send({
        response: 'Password is too short',
      });
    } else {
      bcrypt.hash(password, saltRounds, async (error, hashedPassword) => {
        if (error) {
          return res
            .status(500)
            .send({ response: 'There was an error when crypting the data' });
        }

        try {
          const existingUser = await User.query()
            .select()
            .where({
              username: username,
            })
            .limit(1);

          if (existingUser[0]) {
            return res.status(500).send({
              response: 'User already exists',
            });
          } else {
            const newUser = await User.query()
              .insert({
                username,
                password: hashedPassword,
                first_name: firstName,
                last_name: lastName,
              })
              .whereNotExists(() => {
                User.query().select().whereNot({
                  username: username,
                });
              });
            return res.status(200).send({
              response: newUser,
            });
          }
        } catch (err) {
          console.log(err);
          return res.status(500).send({ response: 'Something went wrong' });
        }
      });
    }
  } else {
    return res.status(404).send({ response: 'Missing fields' });
  }
});

module.exports = router;
