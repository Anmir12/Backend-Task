# User Authentication API

This is a simple Node.js Express API for user authentication and CRUD operations on user data.

## Features

- **Signup**: Allows users to create a new account by providing username and password.
- **Login**: Enables existing users to log in using their credentials.
- **Profile Retrieval**: Authenticated users can retrieve their profile information.
- **User Listing**: Admins can retrieve a list of all users.
- **User Update**: Admins or users can update their profile information.
- **User Deletion**: Admins can delete user accounts.

## Installation

1.Set up environment variables:

    Create a `.env` file in the root directory and define the following variables:

    ```
    PORT=3000
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```



## API Endpoints

- **POST /person/signup**: Create a new user account.
- **POST /person/login**: Log in with existing credentials.
- **GET /person/profile**: Retrieve user profile (requires authentication).
- **GET /person**: Get a list of all users (requires authentication).
- **PUT /person/:id**: Update user profile (requires authentication).
- **DELETE /person/:id**: Delete user account (admin access only).

## Usage

1. **Signup**: Send a POST request to `/person/signup` with JSON body containing `username` and `password`.
2. **Login**: Send a POST request to `/person/login` with JSON body containing `username` and `password`. You will receive a JWT token.
3. **Profile Retrieval**: Send a GET request to `/person/profile` with the received JWT token in the Authorization header.
4. **User Listing**: Send a GET request to `/person` with the received JWT token in the Authorization header (admin access).
5. **User Update**: Send a PUT request to `/person/:id` with the user ID in the URL parameter and updated user data in the request body (admin or user access).
6. **User Deletion**: Send a DELETE request to `/person/:id` with the user ID in the URL parameter (admin access).

## Dependencies

- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)

---
