# 📰 Dragon News

**Live Site:** [https://dragon-news-auth-c17d6.web.app/category/0](https://dragon-news-auth-c17d6.web.app/category/0)

Dragon News is a responsive news portal built with **React**, **Vite**, and **Firebase Authentication**.  
It allows users to browse categorized news, read detailed articles, and securely log in or register using Firebase.  
The project is styled with **Tailwind CSS** and enhanced with **DaisyUI** and **React Icons** for a clean, modern UI.

---

## 🚀 Features

- 🧭 **Dynamic Routing:** Implemented using `react-router` for smooth navigation.
- 🔒 **Private Routes:** News details pages are protected and accessible only to logged-in users.
- 🔐 **Firebase Authentication:** Email/password-based authentication using Firebase.
- ⚡ **Fast Development:** Built with `Vite` for optimized development and lightning-fast builds.
- 🧩 **Reusable Components:** Modular layout using layouts, providers, and page components.
- 💅 **Tailwind CSS & DaisyUI:** Responsive design with utility-first CSS and pre-styled UI components.
- 🔔 **React Hot Toast:** Real-time success/error notifications for user feedback.
- 📆 **Date-FNS:** Used for date formatting throughout the app.
- 📰 **Dynamic Data Loading:** Fetches data from `news.json` using route loaders.

---

## 🔧 Technologies Used

| Category | Tools/Packages |
|-----------|----------------|
| Frontend Framework | React (v19) |
| Build Tool | Vite |
| Styling | Tailwind CSS, DaisyUI |
| Routing | React Router (v7) |
| Authentication | Firebase |
| Notifications | React Hot Toast |
| Icons | React Icons |
| Date Formatting | Date-FNS |

---

## 🧠 Key Concepts Used

- React Context API for global authentication state management.
- PrivateRoute component to restrict access to protected pages.
- Route loaders and `hydrateFallbackElement` for better user experience during data fetching.
- Environment variables for Firebase credentials using `import.meta.env`.

---
