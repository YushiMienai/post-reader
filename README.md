# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`# Supermetrics Front-end Assignment

Welcome to Supermetrics Front-end coding assignment! We're happy to see you here.

The purpose of this assignment is to help evaluate your React and front-end development skills. We use this assignment
to determine the level of your coding and where you might fit in our developer stack. There is no wrong answer or wrong
way of doing this. Please try to do this by yourself. This task may take up to between 3-5 hours and should preferably
be done in Typescript but Javascript is also okay. The final submission should meet production quality standards.

## Task

- Create a simple post reader as a React SPA.
- Implement above using React components and CSS3.
- Retrieve the data shown in the app from the API described below.
- Concentrate on functionality, code quality (CSS and JS/TS) and testability, not design.
- Any common state management, routing and/or testing library can be used.
- Using CSS toolkits and UI frameworks (bootstrap etc) is not ok. The purpose is to evaluate your coding skills, not npm skills.

Must haves:
- Login Screen with email and name inputs.
- Sender list with sender name and post count ordered by name alphabetically.
- Clicking on a sender opens that sender's posts in the post list view.
- Post list where posts are ordered by creation time.
- Post order buttons to allow choosing most recent first and most recent last ordering for posts list

Nice to haves:
- Search box for senders. Any senders whose name do not contain the text entered are hidden
- Search box for posts. Any posts that do not contain the text entered are hidden
- Deep-linkable post list. This means that it is possible to enter a URL that directly selects the sender whose posts are shown.

## Rough Design
![Login Screen](https://github.com/YushiMienai/post-reader/blob/master/readmi-images/login.png)
![Posts Screen](https://github.com/YushiMienai/post-reader/blob/master/readmi-images/posts.png)

## API

1. Use the following endpoint to register a token:

   **POST:** `https://api.supermetrics.com/assignment/register`

   **PARAMS:**

    ```
    *client_id:* ju16a6m81mhid5ue1z3v2g0uh
 
    *email:* User's email from login screen
 
    *name:* User's name from login screen
    ```

   **RETURNS**

    ```
    *sl_token:* This token string should be used in the subsequent query. Please note that this token will only last 
                1 hour from when the REGISTER call happens. You will need to register and fetch a new token as you need it.
 
    *client_id:* Returned for informational purposes only
 
    *email:* Returned for informational purposes only
    ```

2. Use the following endpoint to fetch posts:

   **GET:** `https://api.supermetrics.com/assignment/posts`

   **PARAMS:**

    ```
    *sl_token:* Token from the register call
 
    *page:* Integer page number of posts (1-10)
    ```

   **RETURNS:**

    ```
    *page:* What page was requested or retrieved
 
    *posts:* 100 posts per page
    ```

Author: [Supermetrics](https://supermetrics.com)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
