# remote-app

A remote module in the micro frontend setup, exposing components or functionality for consumption by the host-app, also powered by Module Federation.

## Prerequisites

Ensure the following dependencies are installed:

1.  **Node.js** (Latest version recommended, minimum v18.x)
2.  **Yarn** (Install globally: `npm i -g yarn`)
3.  **Yalc** (Install globally: `npm i -g yalc`)

## Setup Instructions

Please run the commands in the following order

1.  `yarn`: Install project dependencies
2.  `yalc add @archisys/ui-components`: Install the shared ui-components package from the local registry
3.  `yarn build`: Generate a production build for the host app
4.  `yarn preview`: This should automatically serve the app on port `8081`
