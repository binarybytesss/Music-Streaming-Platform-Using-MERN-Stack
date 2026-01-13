# 🎧 Music Streaming Platform Using MERN Stack  🚀 


Welcome to **Music Streaming Platform Using MERN Stack** — a feature-rich, modern web application that recreates the core experience of Spotify using the **MERN stack**. This project demonstrates real-world full-stack development, API integration, authentication, and dynamic UI updates.

---

## 🌟 Why This Project?

Spotify is one of the most popular music streaming platforms globally 🎶.  
Rebuilding its core features helped me:

✅ Understand full-stack architecture  
✅ Work with REST APIs & third-party integrations  
✅ Implement authentication & authorization  
✅ Build interactive, real-time user interfaces  
✅ Gain confidence with the MERN stack  

This project was built as a **hands-on learning journey** and a **portfolio-ready application** 💼.

---

## 🧰 Tech Stack Used

### 🎨 Frontend
- ⚛️ **React.js** – Interactive UI components (player, playlists, navigation)
- 🔄 **Redux** (if used) – Global state management (current song, playback state)
- 🎨 **CSS / Tailwind CSS** – Responsive and clean UI

### 🧠 Backend
- 🟢 **Node.js** – Backend runtime
- 🚂 **Express.js** – REST API creation

### 🔐 Authentication & Security
- 🛂 **Passport.js** – Secure user authentication
- 🔑 **JWT / Sessions** – Authorization handling
- 🎵 **Spotify OAuth** (if enabled)

### 🗄️ Database
- 🍃 **MongoDB** – Stores:
  - User profiles 👤
  - Playlists 📂
  - Liked songs ❤️
  - Playback history ⏯️

### 🌐 External Services
- 🎼 **Spotify Web API** – Fetch tracks, artists, playlists, previews
- ☁️ **Cloudinary** – Store profile pictures & playlist covers

### 🛠️ Developer Tools
- 💻 VS Code – Development
- 📬 Postman – API testing
- 🌱 Git & GitHub – Version control

---

## 🔄 How It Works (High-Level Workflow)

### 👤 User Registration & Login
- Secure login using Passport.js
- Supports Email/Password or Spotify OAuth
- Tokens & sessions handled safely 🔐

### 🏠 Dashboard / Home
- Displays trending songs & playlists 🎶
- Personalized recommendations via Spotify API

### ▶️ Music Player
- Play / Pause ⏸️▶️
- Track switching 🔁
- Seek bar & volume control 🔊
- Real-time UI updates ⚡

### 📂 Playlists & Library
- Create & manage playlists
- Like ❤️ and save songs
- Data stored persistently in MongoDB

### ⚙️ Backend Services
- Express routes handle:
  - 🔍 Search
  - 🎵 Playlist management
  - 👤 User data
- Middleware ensures secure API access

### 🖼️ File Uploads
- Playlist images & profile photos uploaded to Cloudinary ☁️
- Secure URLs stored in database

---

## 📁 Project Structure
Music-Streaming-Platform-Using-MERN-Stack/
spotify_frontend/
spotify_backend/
package.json
package-lock.json
README.md
.gitignore

