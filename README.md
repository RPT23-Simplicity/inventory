# Inventory Service

> A service that handles and displays available sizes for each item in inventory.

Simplicity implementation
![image](https://github-gifs.s3-us-west-1.amazonaws.com/ezgif-5-11fa1cdfb447.gif)

Actual implementation
![image](https://github-gifs.s3-us-west-1.amazonaws.com/ezgif-5-c41cac6afb74.gif) 


## Related Projects

  - https://github.com/RPT23-Simplicity/reviews
  - https://github.com/RPT23-Simplicity/photo-gallery
  - https://github.com/RPT23-Simplicity/product-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Clone this repo and go to its root directory.
1. Run `npm install` to install its dependencies.
1. After the dependencies are installed, seed the database with `npm run seed`
1. Once the database is seeded, run `npm run build` to build the browser components.
1. After building the components, run `npm start` to start the application.
1. You will then be able to access the app at **localhost:3004/shop/{product_id}/{style_id}** where **{product_id}** is the product ID & **{style_id}** is the style ID.

The database seeding script `npm run seed` seeds product ID numbers from 0 - 99 & style ID numbers from 1-3  so going to http://localhost:3004/inventory/2/1 will show inventory information for the product with a product ID of 2 & style ID of 1.

## Requirements

- Node.js
- MongoDB

#### Developed using...
- Node v12.18.3
- npm v6.14.6
- MongoDB v4.4.0

### Dependencies
- Express
- React
- mongoose

### Development Dependencies
- Webpack/Babel
- Jest/Enzyme/Chai/Sinon

## Development
If you would like to contribute to this project, please fork this repository and propose your changes via a Pull Request.

You can install the project's dependencies by going to the root directory of the project and running `npm install`.

Refer to package.json file in the root directory for dependency version numbers.

