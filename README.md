# DK's portfolio
## David Kim(김명훈) 
### A Frontend developer
#### [holahoon.com](https://holahoon.com/)
---

## General Info
This portfolio project was created in replacement of the old holahoon-portfolio. It consists of home, works, about and blog page. For blog page, I'm planning on just linking it to a "Today I Learned" markdown on Github. All the data contents are stored in [project data](./src/components/data/dkData.js), [korean data](./src/components/data/dataInKorean.js) and [english data](./src/components/data/dataInEnglish.js). Each project page is created by looping through the project data. By doing so, I only have to update the [project data](./src/components/data/dkData.js) js file if I have any updated project contents(of course I'd have to add images if needed).

## Technologies

 - [React.js](https://reactjs.org/) - built with `create-react-app`. This project is built with functional components with hooks only.
   - Using context api to create a global variable(state) in order to avoid "prop drilling". It may be an over-kill since the context only has one state which is controlling the language preference either in English or Korean. However, since this language state is very crucial in order to conditionally render the components, I have decided to make it a global state using context api.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
  - This dependency was installed to navigate between main container components(Home, Works, About, Blog) to have a feel of multi-page application.
- [framer-motion](https://www.framer.com/motion/)
  - To improve UX issue by implementing page transition animation. I've created it as a wrapper component and gave it a default object which can be overwritten by passing in props as an object [WrapperTransition.js](./src/components/wrapperContainerTransition/WrapperTransition.js).
- [react-icons](https://react-icons.github.io/react-icons/)
  - This dependency was used to use them as email, github and linkedin links in About page.
- [react-lottie](https://github.com/chenqingspring/react-lottie#readme)
  - Wanted to test how to implement lottie animation files into React project. Two lottie in JSON files were used in [LottieImage.js](./src/components/lottieImage/LottieImage.js).
- [Sass](https://sass-lang.com/)
  - All the sass files are merged into one [main.scss](./src/style/main.scss) file instead of being component specific style imports. Did not see the need of being component specific since the main class names are unique to its page.
- [lodash](https://lodash.com/)
  - Improved event listeners' performance to ease state update using methods such as debounce.

- [absolute imports](https://create-react-app.dev/docs/importing-a-component/) to improve the readability of the imported files.

## Setup
Clone the repo and run:
```
npm install
```
Downloads a package and its dependencies which will generate node_modules folder.

In the project directory, you can run:

```
npm start
```
Runs the app in the development mode in [http://localhost:3000](http://localhost:3000)/

## Project Status

### Deployment
Not yet deployed. Once the contents are finalized, the project will be deployed using Firebase with the same www.holahoon.com url.
