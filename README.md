# codex-online

This project provides a simple Express server with basic CRUD endpoints for a `Customer` resource. Data is stored in memory for simplicity.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
   (An internet connection is required.)
2. Start the server:
   ```bash
   npm start
   ```

The server listens on port `3000` by default or the port defined in the `PORT` environment variable.

## Endpoints

- `GET /customers` – list all customers.
- `POST /customers` – create a customer (JSON body).
- `GET /customers/:id` – get a customer by id.
- `PUT /customers/:id` – update a customer (JSON body).
- `DELETE /customers/:id` – delete a customer.

Customer data is not persisted across restarts since it is stored in memory.
