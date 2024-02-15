# Library Management System

## Description

This application is a simple library management system designed to demonstrate the use of modern web technologies in building a full-stack web application. It allows users to manage books, authors, and borrowing records in a library setting.

The main purpose of this is to teach some basics about coding and managing datas to my brother who is learning SQL and JS.

## Technos

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. [Node.js](https://nodejs.org/en/docs/)
- **Fastify**: A fast and low overhead web framework for Node.js. [Fastify](https://www.fastify.io/docs/latest/)
- **PostgreSQL**: An open-source relational database. [PostgreSQL](https://www.postgresql.org/docs/)
- **pg (node-postgres)**: A collection of Node.js modules for interfacing with your PostgreSQL database. [pg](https://node-postgres.com/)
- **Winston**: A logger for just about everything in Node.js. [Winston](https://github.com/winstonjs/winston)

## Getting Started

1. Clone the repository:
2. Install dependencies:
3. Set up the database:

- Make sure PostgreSQL is installed and running.
- Create a database and configure it in `config/db.js`.

4. Start the server:

## Features

- CRUD operations for managing books, authors, and borrow records.
- Error handling and logging.
- (Any other features specific to your application.)

## Project Structure

- `/config`: Configuration files, database setup and logger/errorHandler files.
- `/routes`: Route definitions for the application.
- `/services`: Business logic and database interactions.
- `/utils`: Utility functions and helpers.
- `server.js`: Entry point for the Fastify server.
