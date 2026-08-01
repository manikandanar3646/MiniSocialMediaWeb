# Mini Social Media

A full-stack social media web application built using **ASP.NET Core Web API**, **SQL Server**, **HTML**, **CSS**, and **JavaScript**. The application enables users to register, log in, create posts, interact through likes and comments, follow other users, and manage their profiles through a clean and responsive interface.

---

## Features

* User Registration
* Secure User Login
* Password Hashing
* User Profile Management
* Create and View Posts
* Like Posts
* Comment on Posts
* Follow Other Users
* RESTful ASP.NET Core Web API
* SQL Server Database Integration
* Responsive Frontend
* Clean Layered Backend Architecture

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* ASP.NET Core 8 Web API
* C#
* Entity Framework Core

### Database

* Microsoft SQL Server

### Tools

* Visual Studio 2022
* Visual Studio Code
* SQL Server Management Studio (SSMS)
* Git & GitHub
* Postman

---

## Project Structure

```text
Mini-Social-Media/
│
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── DTOs/
│   ├── Services/
│   ├── Repositories/
│   ├── Data/
│   ├── Program.cs
│   └── appsettings.json
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── profile.html
│   ├── style.css
│   └── script.js
│
├── database/
│   ├── MiniSocialMedia.sql
│   └── README.md
│
├── .gitignore
└── README.md
```

---

## Application Features

### Authentication

* User Registration
* User Login
* Password Encryption
* Authentication APIs

### User Profile

* View Profile
* Update Bio
* View User Information

### Posts

* Create Posts
* View All Posts
* User Timeline

### Social Features

* Like Posts
* Comment on Posts
* Follow Users

---

## Database

The project uses **Microsoft SQL Server**.

The repository contains:

```
database/
    MiniSocialMedia.sql
```

This script creates all required database tables and relationships.

---

## API Endpoints

### Authentication

* Register User
* Login User

### Users

* Get Profile
* Update Profile

### Posts

* Create Post
* Get All Posts

### Likes

* Like Post

### Comments

* Add Comment

### Follow

* Follow User

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Mini-Social-Media.git
```

---

### 2. Open the Backend

Open the **backend** folder using **Visual Studio 2022**.

Restore NuGet packages and run the project.

---

### 3. Create the Database

Open SQL Server Management Studio.

Execute:

```
database/MiniSocialMedia.sql
```

---

### 4. Configure the Connection String

Update the SQL Server connection string in:

```
backend/appsettings.json
```

---

### 5. Run the Backend

The ASP.NET Core Web API will start.

Example:

```
https://localhost:5001
```

---

### 6. Run the Frontend

Open the **frontend** folder.

Launch the project using **Live Server** or any static web server.

---

## Screenshots

Add screenshots here.

Example:

```
screenshots/
    home.png
    login.png
    register.png
    profile.png
```

---

## Future Improvements

* Image Uploads
* Notifications
* Direct Messaging
* Search Users
* User Feed Algorithm
* JWT Authentication
* Dark Mode
* Real-time Chat using SignalR

---

## Learning Outcomes

This project helped in gaining practical experience with:

* ASP.NET Core Web API
* REST API Development
* Entity Framework Core
* SQL Server Database Design
* Frontend Development
* Client-Server Communication
* CRUD Operations
* Authentication
* Git & GitHub Workflow

---

## Author

**Manikandan AR**

* GitHub: https://github.com/YOUR_USERNAME
* LinkedIn: https://linkedin.com/in/manikandan-ar

---

## License

This project is created for educational and portfolio purposes.
