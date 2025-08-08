# The Archisys Times

This repository includes three modules:

1.  **host-app**: The main application in a micro frontend setup, serving as the container that dynamically loads and integrates remote modules at runtime using Module Federation.
2.  **remote-app**: A remote module in the micro frontend setup, exposing components or functionality for consumption by the host-app, also powered by Module Federation.
3.  **ui-components**: An npm package containing shared UI components, consumed at build time by both host-app and remote-app.

## Prerequisites

Ensure the following dependencies are installed:

1.  **Node.js** (Latest version recommended, minimum v18.x)
2.  **Yarn** (Install globally: `npm i -g yarn`)
3.  **Yalc** (Install globally: `npm i -g yalc`)

## Setup Instructions

To run the application, navigate to each module directory in the following order and follow the instructions in their respective `README.md` files:

1.  **ui-components**: Build and publish the shared UI components package locally
2.  **remote-app**: Configure and start the remote module.
3.  **host-app**: Launch the main application to integrate and render the remote module.
