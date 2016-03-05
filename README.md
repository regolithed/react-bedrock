# Bedrock
[![Build Status](https://travis-ci.org/regolithed/react-bedrock.svg?branch=master)](https://travis-ci.org/regolithed/react-bedrock)
[![Stories in Ready](https://badge.waffle.io/regolithed/react-bedrock.svg?label=ready&title=Ready)](http://waffle.io/regolithed/react-bedrock)

> Bedrock is a React-Redux starter kit.

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Environment Variables](#environment-variables)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Linting Setup](#linting-setup)
    1. [Tasks](#tasks)
    1. [Database](#database)
1. [Team](#team)
1. [Contributing](#contributing)


## Requirements

- Node 5.6
- Postgres 9.2


## Development

### Environment Variables
Bedrock utilizes environment variables for running the application locally and in production. Environment variables can be declared locally by adding them to your ```.profile```
```sh
export DATABASE_URL=postgres://user:pass@localhost
```

### Installing Dependencies & Running
From within the root directory:

```sh
npm install
```

### Linting Setup
ESLint is used for linting as it plays nicely with React and JSX. Bedrock linting adheres to the [Airbnb Stlye Guide](https://github.com/airbnb/javascript) and the react plugin (*both are included as dev-dependencies*). The ESLint settings can be seen in ```.eslintrc.json```. 
First, install ESLint globally:
```sh
npm install -g eslint
```
Next, add the following packages for integration with SublimeText. The easiest way to add these is via "**Package Control**":
- [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter3) Note: The github repository name is “SublimeLinter3”, but the plugin name remains “**SublimeLinter**.”
- [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)

**Note: Restart Sublime Text!!!**

### Tasks
From within the root directory:

```sh
// Run local development environment
npm start

// Run tests
npm test
```

### Database
From within the root directory

```sh
// Intialize postgres database
initdb db/

// Create Local Databases
createdb development
createdb test

// Verify knex CLI
knex --version
// If not installed
npm install knex -g

// Get latest version of database
knex migrate:latest

//If testing
knex migrate:latest --env test

// Update database
knex migrate:make addNewFeatureNameToTableName
```
An Example migration file

```sh
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('todos', (table) => {
      table.string('somethingElse').notNullable();
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('todos', (table) => {
      table.dropColumn('somethingElse');
    }),
  ]);
};
```

### Roadmap

View the project roadmap [here](https://github.com/regolithed/react-bedrock/issues).

## Team

  - **Product Owner**: Stephen Straus
  - **Scrum Master**: Clay Branch
  - **Development Team Members**: Andrew Moon, Dylan Swoope, Justin Seiter


## Contributing

See [CONTRIBUTING.md](https://github.com/regolithed/react-bedrock/blob/master/CONTRIBUTING.md) for contribution guidelines.