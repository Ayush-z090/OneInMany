This project is built to test whether it is possible to control UI elements dynamically through AI.
By "handling the UI," we mean that the AI can decide which page to show and which parts of the UI should be rendered.

The project's name is ALL-in App, meaning any web app can be integrated into this project.

Note: This is an experimental project. Some UI elements may not function correctly or may appear incomplete. However, the AI setup ensures fast responses and minimizes incorrect outputs.

Architecture Overview

1. app.jsx
This is the main script where the final output is rendered.

2. Layered structure
We use multiple scripts working together to get the desired result.

A. Page Layer

We break a page into two scripts:

pageScript: This script defines the entire layout of a page.

component.jsx: This script contains the individual components/elements that the AI can control.

B. AI Handling Layer

We divide the AI-handling logic into two scripts:

componentHandler.jsx:
This script manages routing. It receives data from the AI, then decides what to show or hide. The setup ensures that the AI can indirectly control what the user sees.
Note : In the current setup because of pageTransition component ai navigation is not used in componentHandler instead it used in pageTransition with Gsap 
a seperate js file is created for navgation setup Navigater.js

tree.js:
This script assigns IDs to pages and components. Based on these IDs and the data received, the componentHandler decides routing and rendering.
The object_tree contains IDs as keys and components/pages as values, grouped logically.
A specific component is returned by treeHandler, and is rendered inside its corresponding pageScript.


