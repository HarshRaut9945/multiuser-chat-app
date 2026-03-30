# Multiuser Chat Application

A full-stack chat application where multiple users can chat in real-time. The app includes **authentication, authorization, and JWT-based secure communication**.

---

## **Features**

- User Registration and Login (Authentication)
- JWT Token for session security
- Role-based Authorization (if needed)
- Real-time chat between multiple users
- User profile management
- Responsive UI with TailwindCSS
- Modular code structure

---

## **Tech Stack**

### **Frontend**
- **React** (functional components + hooks)
- **Vite** (fast bundler for React)
- **TailwindCSS + DaisyUI** (UI styling and components)
- **React Icons** (icons like user, email, etc.)
- **localStorage** (for storing JWT token on client)

### **Backend**
- **Node.js + Express.js** (server)
- **MongoDB** (database for users and messages)
- **Mongoose** (ODM for MongoDB)
- **bcryptjs** (password hashing)
- **jsonwebtoken (JWT)** (authentication)
- **Cors** (cross-origin support)

### **Optional**
- **Socket.IO** for real-time chat functionality
- **Postman / Thunder Client** for API testing

---

## **Installation**

### **Backend**
```bash
cd backend
npm install
npm run dev
