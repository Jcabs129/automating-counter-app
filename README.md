# A simple counter-App using [React.js](https://reactjs.org)

> **This tiny application is like adding,removing,deleting, resetting products which reflects in the total number of products into our shopping cart.**

**This is a very basic app but useful to understand the React Components, states, Data Flow, parent to child etc. .**

## Live URL :-

> [Counter App](https://obscure-waters-60500.herokuapp.com)

**OR your can do the following to run in your local machine**

## Scripts

Install node modules

#### `npm install`

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### cypress script

1. naviagte to root directory `/counter-app`
2. to start counter-app `npm start`
3. `npm run cypress:open` (headless:false) - this will open/run a test-runner GUI 
4. `npx cypress run` (headless:true)

### jest and enzyme setup/scripts

1. To run a single file - `npm run test app.test.js`
2. To run all the tests - `npm run test`

test files can be located at:
`src/__tests__`

### material

https://medium.com/@savan.chhayani/setup-enzyme-and-jest-for-the-react-application-ecf49ee1dfc5

https://blog.usejournal.com/testing-with-jest-and-enzyme-in-react-part-3-best-practices-when-testing-with-jest-and-enzyme-ae3fe0c39d06