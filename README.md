


Readme
Node.js REST API with MongoDB and TypeScript
This project is a simple Node.js web server built with TypeScript, MongoDB, and JSON Placeholder data. It provides REST endpoints to manage users, posts, and comments.

Features
Node.js server using TypeScript and MongoDB

RESTful API endpoints for CRUD operations

Data fetched from JSON Placeholder API

Proper error handling and response codes

Project Structure
├── src
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   └── userController.ts
│   ├── models
│   │   ├── userModel.ts
│   │   ├── postModel.ts
│   │   └── commentModel.ts
│   ├── routes
│   │   └── userRoutes.ts
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
Installation
Clone the repository:

git clone https://github.com/saurabhkumar28/node_assigment.git
Navigate to the project directory:

cd node_assignment
Install dependencies:

npm install
Create a .env file in the root directory and add your MongoDB URI:

MONGO_URI=your_mongodb_connection_string
Running the Project
To run the server in development mode:

npx ts-node src/server.ts
API Endpoints
Method	URL	Description
GET	/load	Load 10 users with posts & comments into DB
DELETE	/users	Delete all users from DB
DELETE	/users/:userId	Delete a specific user by ID
GET	/users/:userId	Get user details with posts & comments
PUT	/users	Add a new user to the database
Notes
Ensure MongoDB is running locally or via a cloud provider.

Use Postman or a similar tool to test the endpoints.

License
This project is licensed under the ISC license.
