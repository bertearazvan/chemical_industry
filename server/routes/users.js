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
const { isAuthenticated } = require('../middleware/auth');

// bcrypt.hash("password", saltRounds, (error, hashedPassword) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("this is the newly hashed password", hashedPassword);
// })

// bcrypt.compare("password", "$2b$10$iIWF5cIuNrXrRGw8xqdr7efqYjgpqxc1OJWIM3IhzXSNPhH6.MJ5q", (error, isSame) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("it is the same? ", isSame);
// })

router.post('/users/login', async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (email && password) {
    try {
      const users = await User.query()
        .where({
          email: email,
        })
        .limit(1);

      const user = users[0];
      console.log(user);
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
        //   console.log(isSame);
        user.password = '';
        if (!isSame) {
          return res.status(404).send({
            response: 'Wrong password',
          });
        } else {
          sess = user;

          const token = jwt.sign(
            {
              userId: user.id,
              email: user.email,
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
  const { email, password, firstName, lastName, repeatPassword } = req.body;

  if (
    email &&
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
              email: email,
            })
            .limit(1);

          if (existingUser[0]) {
            return res.status(404).send({
              response: 'User already exists',
            });
          } else {
            const newUser = await User.query()
              .insert({
                email,
                password: hashedPassword,
                first_name: firstName,
                last_name: lastName,
              })
              .whereNotExists(() => {
                User.query().select().whereNot({
                  email: email,
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
