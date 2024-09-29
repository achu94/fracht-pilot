
# Fracht-Pilot Backend

Fracht-Pilot is a backend service for an application that enables end-users to manage shipments, drivers, and trucks efficiently. The backend serves as the central point for handling API requests, database interactions, and business logic for shipment management.

## Technologies Used

This project leverages the following technologies:

- **Bun**: A fast, all-in-one JavaScript runtime used to handle the backend server efficiently with modern JavaScript features.
- **Hono**: A lightweight, high-performance web framework for building APIs in TypeScript. Hono provides an easy way to create RESTful endpoints to manage shipments, drivers, and trucks.
- **Drizzle ORM**: A type-safe, lightweight ORM for managing database schema, migrations, and data operations. It simplifies database interactions and enforces type safety within the TypeScript codebase.
- **MySQL2**: A modern MySQL client for Node.js and Bun, used for establishing a connection with the MySQL database and executing SQL queries.
- **Drizzle-Kit**: A set of tools designed to work with Drizzle ORM to generate TypeScript types and perform database migrations safely and easily.

## Current State

- **Database Migrations**: The database schema has been fully set up using Drizzle ORM, and all necessary migrations have been completed to support shipment, driver, and truck management.
- **API Development**: The development of RESTful endpoints using the Hono framework is currently in progress. These endpoints will provide functionalities for managing shipments, trucks, and drivers.
- **Seeding**: Initial database seeding scripts are in place to populate the database with sample data, streamlining the testing and development process.