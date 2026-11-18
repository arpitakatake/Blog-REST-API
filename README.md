# Blog REST API

A RESTful API for managing blog posts, built to perform CRUD (Create, Read, Update, Delete) operations.

## Features

- Retrieve all blog posts
- Retrieve a single blog post by ID
- Create new blog posts
- Update existing blog posts
- Delete blog posts
- JSON-based request and response handling

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/posts` | Retrieve all posts |
| GET | `/api/posts/:id` | Retrieve a single post |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update an existing post |
| DELETE | `/api/posts/:id` | Delete a post |

## Post Data Structure

Each post contains:

- `id` – Unique post identifier
- `title` – Post title
- `content` – Post content
- `author` – Post author
- `category` – Post category

## Example POST Request

```json
{
  "title": "My First API Post",
  "content": "This is my first post created using the Blog REST API.",
  "author": "Arpita",
  "category": "Technology"
}
```

## Example Response

```json
{
  "success": true,
  "message": "Post created successfully",
  "data": {
    "id": 4,
    "title": "My First API Post",
    "content": "This is my first post created using the Blog REST API.",
    "author": "Arpita",
    "category": "Technology"
  }
}
```

## Testing

The API endpoints were tested using Postman.

- GET – Retrieve posts
- GET by ID – Retrieve a specific post
- POST – Create a post
- PUT – Update a post
- DELETE – Delete a post

The exported Postman collection is included in this repository for testing the endpoints.

## Tools & Technologies

- Node.js
- REST API
- Postman
- JSON

## Author

Arpita Katake
