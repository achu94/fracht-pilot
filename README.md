Fracht-Pilot Backend

Fracht-Pilot is an application that allows end-users to manage shipments, drivers, and trucks efficiently. This repository contains the backend implementation of the Fracht-Pilot app, which handles the API and database interactions.
Table of Contents

    About
    Technologies
    Setup and Development
    Scripts
    Database
    Current Status

About

Fracht-Pilot is designed to help users manage their shipments, drivers, and trucks in one platform. This backend serves as the core of the app, handling all the logic, data processing, and interactions with the database.
Technologies

This project utilizes the following packages:

    Bun: A fast all-in-one JavaScript runtime that is used here for its speed and modern development experience.
    Hono: A lightweight and fast web framework for building APIs. It is used to create RESTful endpoints that allow users to manage shipments, drivers, and trucks.
    Drizzle ORM: A type-safe, lightweight ORM for TypeScript and JavaScript. It is used to handle database schema generation, migrations, and data interaction.
    mysql2: A modern MySQL client for Node.js and Bun, providing the database connection and query execution.
    drizzle-kit: A set of tools that work with Drizzle ORM to generate types and perform database migrations in a type-safe manner.

Dev Dependencies

    @types/bun: Type definitions for Bun, enabling better TypeScript support during development.

Setup and Development

    Clone the repository:

    bash

git clone https://github.com/your-username/fracht-pilot-backend.git
cd fracht-pilot-backend

Install dependencies (Bun automatically installs dependencies):

bash

bun install

Set up the environment variables:

    Create a .env file in the root directory.
    Add your database connection details and other necessary configuration values.

Start the development server:

bash

    bun run --hot src/index.ts

Scripts

Here are the key scripts you can use to interact with the backend:

    dev: Runs the development server with hot-reloading.

    bash

bun run --hot src/index.ts

db:generate: Generates TypeScript types and models using Drizzle ORM.

bash

bun drizzle-kit generate

db:migrate: Runs the database migrations using Drizzle.

bash

bun run --no-install src/db/migrate.ts

db:seed: Seeds the database with initial data.

bash

    bun run --no-install src/db/seed.ts

Database

The backend uses MySQL as the database. The schema and interactions with the database are managed using Drizzle ORM. Here’s an overview of how the database is handled:

    Migrations: Define changes to the database schema in a structured way, allowing for easy updates and rollbacks.
    Seeding: Populates the database with initial data such as default users, trucks, and sample shipments.

To apply database migrations:

bash

bun run --no-install src/db/migrate.ts

To seed the database:

bash

bun run --no-install src/db/seed.ts

Current Status

    Database Migrations: Completed. The database schema has been set up using Drizzle ORM, and the initial migrations have been successfully applied.
    API Development: Currently in progress. Working on building and refining RESTful endpoints using Hono to manage shipments, drivers, and trucks.

Contributing

Feel free to open issues and submit pull requests. Any help to improve the backend is appreciated!
License

This project is open-source and available under the MIT License.