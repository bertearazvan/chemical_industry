# Chemical industy A/S project

### This is a project for the Development Environments module

## Overview

The project contains two folders:

- Client
- Server

## Server

The server side represents the Back-end part which is built with Node.js and Express.

Please make sure you have the following services installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)
- Knex
  - In order to install knex open your CLI and run `npm install knex -g`

In order to start working with our project you need to follow these steps:

1. Navigate to the server folder with your preffered CLI.
2. Log in into your local mysql database using your preffered CLI.
   - Log in with `mysql -u yourUsernameHere -p`
   - Create a database for the current project by running `CREATE DATABASE yourDBname;`
   - run `exit;`
3. Navigate to /server/config and create a file called "db_credentials.js" and follow the template from the "db_credentials_template.js" by inserting the previously set database name, your username and password.
4. Navigate to back /server and run `npm install`.
5. After everything is installed, make sure you are in /server folder and run the following commands:
   - Migrations: `npm run m:latest` or if you want to rollback the migrations `npm run m:rollback`
   - Seeds: `npm run s:run`
6. After everything is done you can run `npm run start-dev` in order to start the development server. You should see in console something similar to `Server is listening on port 9090 ...`

## Client

The client side represents the Front-end part which is built with React.

In order to start working with our project you need to follow these steps:

1. Navigate to the /client folder with your preffered CLI.
2. Run `npm install`
3. Run `npm run start`

A new browser window should pop-up where you can see the project.
