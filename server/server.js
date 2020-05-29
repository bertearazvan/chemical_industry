const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// ##### Middleware #####
app.use(helmet());
// app.set('trust proxy', 1);
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// ##################

// ##### Routes #####
const usersRoute = require('./routes/users');
const warehousesRoute = require('./routes/warehouses');
const deliveriesRoute = require('./routes/deliveries');
app.use(usersRoute);
app.use(warehousesRoute);
app.use(deliveriesRoute);

app.get('/', (req, res) => {
  res.status(200).send({ response: 'Responsive route' });
});

// ##################

// ##### Models and knex #####

const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexFile.js');

const knex = Knex(knexFile.development);

//Give the knex instance to objection
Model.knex(knex);

// ##################

const PORT = process.env.PORT || 9090;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is listening on port ${PORT} ...`);
});
