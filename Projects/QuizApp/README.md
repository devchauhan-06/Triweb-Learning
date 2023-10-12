# Quiz App 

This is the backend of a Quiz App, which provides the necessary API endpoints and logic to manage quizzes, questions, and user interactions. This README provides an overview of the project, installation instructions, and basic usage guidelines.


## Features

- Create, update, and delete quizzes and questions.
- User registration and authentication.
- User-specific quiz history and scores.
- Quiz results and feedback.
- API documentation.
- Admin panel for managing quizzes (optional).
- Customizable configurations.

## Technologies Used

- Html
- CSS
- Node.js
- Express.js
- MongoDB 
- JSON Web Tokens (JWT) for authentication
- Other dependencies specified in `package.json`



## API Endpoints
The API endpoints provided by this backend include:

- **/auth/register**: This is a POST request and it registers a new user.
- **/auth/login**: This is a POST request and it authenticate and log in a user.
- **/user/:userID**: This is a GET request and it gets details of user.
- **/user/**: This is a PUT request and it updates details of user.
- **/quiz:** This is a POST request and it creates a new quiz.
- **/quiz/:quizID**: This is a Get request and it retrieves a specific quiz.
- **/quiz/:quizId**: This is a Delete request and it deletes a specific quiz.
- **/quiz/publish**: This is a Patch request and it publishes a specific quiz.
- **/exam/:examId**: This is a Get request and it starts a specific quiz.
- **/exam/**: This is a POST request and it submits a specific quiz.
- **/quiz/:quizId**: This is a Delete request and it deletes a specific quiz.
- **/report/:quizId**: This is a Get request and it gives report of  a specific quiz.

