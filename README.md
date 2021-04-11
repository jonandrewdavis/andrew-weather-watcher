# Andrew's Weather Watcher App

Demo link: https://jonandrewdavis.github.io/andrew-weather-watcher/

An app for practice designed to re-create features within Google's weather widget.

Leverage's free weather information from [OpenWeather API](https://openweathermap.org/api), Google Maps, [D3 JS](https://d3js.org/) for charting.

#### Lightweight documentation of decisions (ADRs, lite)

- Use CRA
- Use Chakra UI
- Use D3
- Use `fetch`
- No Tests

#### CRA

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html) allows a super simple starting point with close to 0 configuration, saving time in terms of webpack config. Easily deployed to GitHub Pages.

#### Chakra UI

[Chakra UI](https://chakra-ui.com/) is a library of components I wanted to learn, as I'd heard a lot of buzz about it. It was a great choice for easy styling. It still demonstrates mastery of CSS and component based design while speeding up development by covering the basics.

#### D3

D3 is a standard choice for simple charting based on data. Not many good choices for integration with React (see below), but a utility using `refs` pattern made rendering charts easy. The utility and process is documented in this up to date article from Sep 21, 2020: [Using D3.js Inside a React App](https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app)

Did not use [react-d3-library](https://github.com/react-d3-library/react-d3-library) as it is no longer maintained, 5+ years since the last commit and potentially dangerous, or buggy, or both.

#### Fetch

Fetch is the browser standard way to make API calls. Super simple, no abstraction needed for interacting with public RESTful APIs like OpenWeather and Google Maps.

#### No Tests

No tests written or created for this app, as that wasn't the focus of this project. Please see the wonderful documentation of [React Testing Library]https://testing-library.com/docs/react-testing-library/intro/) for more information on testing.

---

# Create React App README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
