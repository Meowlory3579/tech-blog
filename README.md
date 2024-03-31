# Tech Blog

## Description
This purpose of this project is to build a CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation
npm i express-handlebars  
npm i mysql2  
npm i sequelize  
npm i dotenv  
npm i bcrypt  
npm i express-session  
npm i connect-session-sequelize
npm i express

Create db -- open server.js in integrated terminal. Type "mysql -u root -p" and press enter. Enter MySQL password and press enter. Type "source db/schema.sql" and press enter. Enter "exit" and press enter. NPM run seed.