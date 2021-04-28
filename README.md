# Quiz App

Starting with a basic React app, your goal is to implement a basic
multiple-choice quiz application.

## Goals

1. Load the quiz and show the first question
2. Show four answers with each question, allow user to select an answer
3. Let the user select an answer and tell them if they are correct
4. Allow user to move to the next question (button or automatically)
5. Show quiz progress
6. Show final quiz score

## Stretch Goals

- Allow user to submit their name to claim their quiz score
- Show a leaderboard of the top quiz scorers

## Setup

- Install dependencies: `yarn install`
- Run application: `yarn start`

## Helpers

There is an `apiCall` helper in `src/helpers/api.js` that can be used for making
API requests.

It takes the path, request method, and body as parameters and returns a Promise
with the API response.

The parameters for the `apiCall` helper are defined as:

| Parameter | Description                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| `path`    | The request path that is appended to the base API url. <br> The base API url is set to http://localhost:3100 |
| `method`  | Request methods such as `GET`, `POST`, `PUT`, `DELETE`                                                       |
| `body`    | (Optional) JSON data to send with request                                                                    |

<br>

Example of using `apiCall` in a component:

````
function Quiz () {
  ...

  useEffect() {
    apiCall('quiz', 'POST', {})
        .then(res => setQuiz({quiz: res}))
  }

  ...
}
```# quiz-frontend
````
