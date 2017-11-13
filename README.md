# My App Name
Demo app with basic REST API

## REST API
List of user routes :

Route | HTTP | Description
----- | ---- | -----------
/api/signup | POST | Create new user
/api/signin | GET | Get a single user
/api/users | GET | Get all the users
/api/users/:id | GET | Get a single user
/api/users | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info
/api/users/:id | PATCH | Update a user with specific new info

## Usage
With only npm :
npm install
npm start

## Create
create .env :
secret="Fill your secret"