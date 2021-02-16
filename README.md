# Inventory Service

> A service that handles and displays available colors & sizes for each item in inventory.

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

The database seeding script `npm run seed` seeds Product ID numbers between 1 - 100 so going to http://localhost:3001/inventory/2/1 will show inventory information for the product with a product ID of 1.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

