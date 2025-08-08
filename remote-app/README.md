# remote-app

A remote module in the micro frontend setup, exposing components or functionality for consumption by the host-app, also powered by Module Federation.

## Prerequisites

Ensure the following dependencies are installed:

1.  **Node.js** (Latest version recommended, minimum v18.x)
2.  **Yarn** (Install globally: `npm i -g yarn`)
3.  **Yalc** (Install globally: `npm i -g yalc`)

## Setup Instructions

Please run the commands in the following order

1.  Make sure that you are navigated to the `remote-app` directory on your terminal
2.  `yarn`: Install project dependencies
3.  `yalc add @archisys/ui-components`: Install the shared ui-components package from the local registry
4.  Add your api key for the newsapi service on the `.env.production` file
5.  `yarn build`: Generate a production build for the host app
6.  `yarn preview`: This should automatically serve the app on port `8081`
