# Social API

A RESTful API for a social media platform built with Express.js, Prisma, and SQLite.

## Features

- User registration and JWT authentication
- Create, read, and delete posts
- Comment on posts
- Like/unlike posts
- Password hashing with bcrypt

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js 5
- **ORM:** Prisma
- **Database:** SQLite
- **Authentication:** JWT + bcrypt

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database (optional)
node prisma/seeds/main.js
```

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
```

### Running the Server

```bash
# Development
npx nodemon index.js

# Or directly
node index.js
```

The API runs on `http://localhost:8800`

## API Endpoints

### Users

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/users` | No | Register a new user |
| POST | `/users/login` | No | Login and get JWT token |
| GET | `/users` | Yes | Get all users |
| GET | `/users/verify` | Yes | Verify token and get user info |

### Posts

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/posts` | No | Get all posts |
| GET | `/posts/:id` | No | Get a single post |
| POST | `/posts` | Yes | Create a new post |
| DELETE | `/posts/:id` | Yes | Delete a post |
| POST | `/posts/:id/like` | Yes | Like a post |
| DELETE | `/posts/:id/like` | Yes | Unlike a post |

### Comments

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/comments` | Yes | Create a comment |
| DELETE | `/comments/:id` | Yes | Delete a comment |

## Authentication

Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-token>
```

## Docker

Build and run with Docker:

```bash
docker build -t social-api .
docker run -p 80:80 social-api
```

The container runs Nginx as a reverse proxy on port 80.

## Database Schema

- **User:** id, name, username, bio, password, created
- **Post:** id, content, userId, created
- **Comment:** id, content, userId, postId, created
- **Like:** id, userId, postId, created
