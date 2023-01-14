# Express GraphQL Example

This is an example project using Express and Apollo Server as middleware. With Typescript + SQLite (Sequelize). 

## Install

1. Install dependencies: npm install
2. Create the config file at src/config/db-config.json.
3. Create the database: npm run migration:up
4. Populate the database: npm run seed:up
5. Start project with npm start

## Usage

The endpoint for GraphQL queries is /graphql
You can execute all the queries defined at src/resolvers. Here is an example:

    query SampleQuery {
    threads {
        name,
        description,
    user {
    userName
    },
    comments {
    description,
    user {
    userName
    }
    }
    }
    }

## Contributing

PRs accepted.

## License

MIT © Nachospub
