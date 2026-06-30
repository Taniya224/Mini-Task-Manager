# 📝 Mini Task Manager

A full-stack task management application built for the CommuSync technical assessment.

## Features

- Add a task
- View all tasks
- Mark a task as completed
- Delete a task

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Folder Structure

```
Mini-Task-Manager
│
├── client/
│   ├── app/
│   ├── components/
│   ├── services/
│   └── types/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── src/
│
└── README.md
```

---

## Setup

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Fetch all tasks |
| POST | /api/tasks | Create a task |
| PATCH | /api/tasks/:id | Toggle task completion |
| DELETE | /api/tasks/:id | Delete a task |

---

# Design Decisions

### Next.js App Router
Used App Router for a modern project structure and component-based frontend.

### TypeScript
Used TypeScript to improve type safety and reduce runtime errors.

### Express.js
Used Express to build a lightweight REST API with clear route separation.

### MongoDB
MongoDB was chosen because its document-based structure fits simple task objects well and integrates easily with Mongoose.

### Tailwind CSS
Tailwind CSS was used for rapid UI development and consistent styling without writing custom CSS for every component.

### Project Structure
Frontend and backend are separated into different folders, while backend logic is organized into models, controllers, and routes for better maintainability.

### Validation & Error Handling
Basic validation prevents empty tasks, and API operations include appropriate error handling to avoid crashes and provide meaningful responses.
