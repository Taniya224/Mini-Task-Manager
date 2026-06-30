# 📝 Mini Task Manager

A full-stack task management application built as part of the CommuSync technical assessment. The project demonstrates full-stack development fundamentals using Next.js, TypeScript, Express, MongoDB, and Tailwind CSS.

---

## 🚀 Features

- ✅ Add a new task
- ✅ View all tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Responsive and modern UI
- ✅ Input validation
- ✅ Error handling
- ✅ RESTful API architecture

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
Mini-Task-Manager/
│
├── client/      # Next.js frontend
├── server/      # Express backend
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd Mini-Task-Manager
```

### 2. Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:5000
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a task |
| PATCH | /api/tasks/:id | Toggle task completion |
| DELETE | /api/tasks/:id | Delete a task |

---

## 💡 Design Decisions

- Used **Next.js App Router** for a modern React application structure.
- Used **Express.js** to build a simple RESTful API.
- Used **MongoDB with Mongoose** for flexible data storage.
- Kept the project modular by separating controllers, models, routes, and components.
- Added Tailwind CSS for a clean, responsive, and maintainable UI.

---

## 📸 Preview

(Add screenshots here if available.)

---

## 👩‍💻 Author

**Taniya Das**

Built for the **CommuSync Full-Stack Developer Technical Assessment**.
