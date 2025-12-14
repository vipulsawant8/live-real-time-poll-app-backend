# Live Realtime Poll App Backend

A scalable Node.js backend for a real-time polling application built with Express, MongoDB, and Socket.IO.

## Features
- JWT-based authentication
- Poll creation and voting
- Real-time updates with Socket.IO
- Centralized error handling
- Environment-based configuration

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- Socket.IO

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file based on `.env.example`.

```
DB_CONNECT_STRING="your_database_connection_string_here"

CORS_ORIGIN=https://kanban-board-task-management-app-fr.vercel.app

ACCESS_TOKEN_SECRET='your_access_token_secret_here'
REFRESH_TOKEN_SECRET='your_refresh_token_secret_here'
```

## Project Structure

See the `/src` directory for feature-based organization of routes, controllers, models, and socket logic.

## License
MIT
