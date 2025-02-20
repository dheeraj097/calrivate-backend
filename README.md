## Description

Backend of the full stack assessment built using nestjs.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Environment Variables

The project uses environment variables to configure the database connection. Create a `.env` file in the root directory with the following variables:

- DB_HOST=localhost 
- DB_PORT=3306 
- DB_USERNAME=root 
- DB_PASSWORD=your_password 
- DB_DATABASE=clarivate_db 
- DB_LOGGING=true

## Verifying the setup

visit http://localhost:3001/products and you will see the api response something like this