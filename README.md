# DK's portfolio
### A Frontend developer
#### [holahoon.com](https://holahoon.com/)
---

## General info
This portfolio project was created in replacement of the old holahoon-portfolio.

## Technologies

#### Main stack
 [React.js](https://reactjs.org/) - built with `create-react-app`. This project is purely built with functional components with hooks only.
 - Using context api to create a global variable(state) in order to avoid "prop drilling". It may be an over-kill since the context only has one state which is controlling the language preference either in English or Korean. However, since this language state is very crucial in order to conditionally render the components, I have decided to make it a global state using context api.

#### Dependencies
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
  - This dependency was installed to navigate between main container components(Home, Works, About, Blog) to have a feel of multi-page application.
- [framer-motion](https://www.framer.com/motion/)
  - To improve UX issue by implementing page transition animation. I've created it as a wrapper component and gave it a default object which can be overwritten by passing in props as an object [WrapperTransition.js](./src/components/wrapperContainerTransition/WrapperTransition.js).
- [react-icons](https://react-icons.github.io/react-icons/)
  - This dependency was used to use them as email, github and linkedin links in About page.
- [react-lottie](https://github.com/chenqingspring/react-lottie#readme)
  - I wanted to see how to implement lottie animation files into React project. Two lottie in JSON files were used in [LottieImage.js](./src/components/lottieImage/LottieImage.js).
- [Sass](https://sass-lang.com/)
- [lodash](https://lodash.com/)

It is using [absolute imports](https://create-react-app.dev/docs/importing-a-component/) to improve readability of the imported files.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
