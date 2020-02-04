# Project 2 Feedback

## Code Quality - Excelling

Criteria: Is the code well-formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Code is well-formatted with semantic and sensible variable names.
-   Code has a natural flow that is easy to follow.
-   You did a great job using lightweight functional components for your React app, and kudos for using Hooks in SearchResults to manage state for your functional component!
-   A logical component hierarchy, with App as the parent, About, Home, Images, and Search Results as its children, and Search Form as the child of Search Form. Images is state-ful and uses Hooks. Search Results is also a state-ful component and passes its data down to Search Form, which definitely works. Consistent with the principle of unidirectional data flow, in which the topmost component that needs state data has it, and passes it down to its child.
-   UI components are well-modularized, with component hierarchy reflecting information architecture.

### Areas for Growth:

-   A more typical component hierarchy involves having App as the state-ful component, which passes state data and methods down to its children. However, technically state only needs to be lifted to the nearest common ancestor of whichever components need it, so the way that you have your application structured makes sense for your purposes. Just noted here for future React projects.
-   One suggestion for cutting down on the length of `index.css`: although styles that apply to all/most components can definitely live in `index.css` or `App.css`, you can also put styles that apply specifically to individual components, such as Search or About, in their own `Search.css` or `About.css` files. This better exemplifies the principle of separation of concerns, cuts down the length of your main stylesheet, and makes it easier to find and update styles.

## Technical Requirements - Performing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   Lots of great interactive features here, including POD, an about page, as well as a search feature.
-   Great job using React Router for programmatic navigation through the app.
-   Uses a third-party API with a correctly-secured API key.
-   Successfully deployed to Heroku.

### Areas for Growth:

-   Definitely work on getting some placeholder data or images into your app for when the API is down. This could just be an error message that asks the user to check back later, or hard-coded data that you save in the repo and substitute in when there's no API data.

## Creativity and Interface - Performing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   The app looks great -- styling reflects the outer-space theme as well as NASA.
-   The navigation bar provides clear calls to action that help the user find their way through the application.
-   Application is responsive to smaller screens, though I noticed that on the search page, the image jumps to the left.

### Areas for Growth

-   Application is not yet styled for wide-screens -- I would add a max-width so that the app doesn't get too stretched out.
-   There are a few places where I would add some more margins and padding so that text and images don't touch the edge of the browser window.

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   The application works as intended, with the Picture of the Day and Search features providing great interactivity.
-   Features are fully-implemented and functional.

### Areas for Growth:

-   Because the Search request is being sent as soon as the Search component renders, it returns a 400 Bad Request error in the console. Refactor so that the call only goes out on the click of the Search button.
-   I would also add some conditional rendering on the Search component, so that the white outline for the image only shows up after there has been a search with successful results.
-   When I tested the deployed app for the purposes of evaluating the project, the POD images were not showing up -- I know the API goes down sometimes, but I would double check the latest code you pushed and make sure there wouldn't be anything breaking the POD image displaying. The other data for the POD shows, so the API call is working -- something's up with the images though.

## Presentation - Performing

Criteria: Is there adequate documentation? Is the repository well-organized and free of clutter?

### Strengths:

-   Nice work building out a solid Readme, with great screenshots of your application and insights into your planning.
-   Well-organized, clutter-free repository, with components organized into their own directory.

### Areas for Growth:

-   Add a link to your deployed application at the top of your repo -- there's a field where you can edit the description and add a website at the very top; your Heroku URL should go there so visitors to the repo can easily access the live app.

## Hard Requirements - Complete:

-   [x] Your app must be a working, interactive, React application.
-   [x] It must include data from a third-party API.
-   [x] It must use at least 4 separate components.
-   [x] It must be deployed to the Web.
-   [x] It uses CSS Grid or Flex for layout and not floats.
-   [x] Your project repository must adequately document your project and include a line to the deployed app.
-   [x] You have used git for version control throughout the project.

## Grade: Pass
