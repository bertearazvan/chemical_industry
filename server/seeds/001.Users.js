exports.seed = function (knex) {
  // Inserts seed entries
  return knex("users").insert([
    {
      email: "anders@me.com",
      password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy",
      first_name: "Anders",
      last_name: "Latif",
    },
    {
      email: "steven@me.com",
      password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy",
      first_name: "Steven",
      last_name: "Albury",
    },
    {
      email: "andrei@me.com",
      password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy",
      first_name: "Stefan-Andrei",
      last_name: "Atudorei",
    },
    {
      email: "cassandra@me.com",
      password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy",
      first_name: "Cassandra",
      last_name: "Tiltack",
    },
    {
      email: "charlene@me.com",
      password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy",
      first_name: "Charlene",
      last_name: "Marteyn",
    },
    {
      email: "paulina@me.com",
      password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy",
      first_name: "Paulina",
      last_name: "Kazmierczak",
    },
    {
      email: "razvan@me.com",
      password: "$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy",
      first_name: "Razvan",
      last_name: "bertea",
    },
  ]);
};
