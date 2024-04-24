# RESTful APIs

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshots

<p align="center">
  <img src="./public/images/Image 4-24-24 at 10.28 AM (1).jpg" alt="screenshot" width="700" height="400" />
  <img src="./public/images/Image 4-24-24 at 10.28 AM.jpg" alt="screenshot" width="700" height="400" />
  <img src="./public/images/Image 4-24-24 at 10.29 AM.jpg" alt="screenshot" width="700" height="400" />
</p>

## Table of Contents

- [Starting Point](#starting-point)
- [Added Additional Routes](#added-additional-routes)
- [Technologies Used](#technologies-used)
- [Github Link](#github-link)
- [Installation](#installation)
- [License](#license)

## Starting Point
The application had the following routes as the starting point: 

* GET /
    * GET /api
        * GET /api/users
        * POST /api/users
            * GET /api/users/:id
            * PATCH /api/users/:id
            * DELETE /api/users/:id
        * GET /api/posts
        * POST /api/posts
            * GET /api/posts/:id
            * PATCH /api/posts/:id
            * DELETE /api/posts/:id


## Added Additional Routes
Created the following routes, using good organizational and coding practices:


* GET /api/users/:id/posts
    * Retrieves all posts by a user with the specified id.
* GET /api/posts?userId=value
    * Retrieves all posts by a user with the specified postId.
* GET /comments
    * Note that we do not have any comments data yet; that is okay! Make sure that you create a place to store comments, but you do not need to populate that data.
* POST /comments
    * When creating a new comment object, it should have the following fields:
        * id: a unique identifier.
        * userId: the id of the user that created the comment.
        * postId: the id of the post the comment was made on.
        * body: the text of the comment.
* GET /comments/:id
    * Retrieves the comment with the specified id.
* PATCH /comments/:id
    * Used to update a comment with the specified id with a new body.
* DELETE /comments/:id
    * Used to delete a comment with the specified id.
* GET /comments?userId=value
    * Retrieves comments by the user with the specified userId.
* GET /comments?postId=value
    * Retrieves comments made on the post with the specified postId.
* GET /posts/:id/comments
    * Retrieves all comments made on the post with the specified id.
* GET /users/:id/comments
    * Retrieves comments made by the user with the specified id.
* GET /posts/:id/comments?userId=value
    * Retrieves all comments made on the post with the specified id by a user with the specified
userId.
* GET /users/:id/comments?postId=value
    * Retrieves comments made by the user with the specified id on the post with the specified
postId.

## Technologies Used
- Restful APIs
- Javascript 
- Express.js

## Github Link

- Github Repo URL: https://github.com/Najiba-Haidari/restful-api 

## Installation
- Fork the respository
- npm install
- Navigate to localhost:3000

## License

This project is under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
