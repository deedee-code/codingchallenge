# Food Truck

A service that tells the user what types of food trucks might be found near a specific location on a map.

## Install & Run the Code

- Clone the repo: https://github.com/deedee-code/codingchallenge.git
- cd backend-code-challenge
- cd junior
- cd Food_Truck
- npm install
- npm run dev

## Technical Stack

- Framework: Express.js with Typescript for type safety.
- Dependencies: Axios, Cors, Morgan, Helmet, dotenv.
- API Documentation: Swagger for documenting the RESTFul API.
- Data Source: Utilize the DataSF API to fetch information about filmed locations in San Francisco.

## Experience with Technical Stack:

- Express.js: Comfortable, with extensive experience in building RESTful APIs.
- TypeScript: Familiar with its type safety and benefits.
- Swagger: Familiar with its ability to generate interactive API documentation.
- Axios: Proficient, used for making HTTP requests in various projects.
- Swagger UI: Familiar with its ability to render interactive API documentation.
- DataSF API, My first time using this API.

## Constraints:

I ran out of time, I wasn't able to finish within the four hours given. If I'm given more time, I will like to implement the UI/UX for the service.

## Swagger API Documentation

`http://localhost:3000/api-docs/`

Request:

```
http://localhost:3000/api/foodtrucks/:latitude/:longitude


Example:

http://localhost:3000/api/foodtrucks/37.794331003246846/-122.39581105302317

```
