### 📄 Project Overview

This application provides an interactive search UI that displays files based on the user’s input.
It focuses on delivering a smooth search experience while handling asynchronous data fetching, loading states, and edge cases correctly.

---

### 🧩 Problem Statement

The goal of this project is to build a responsive search interface that fetches and displays results dynamically while avoiding unnecessary backend calls and poor user experience during async operations.

---

### 🛠 Tech Stack

* Vue 3 (Composition API)
* Vite
* TypeScript

---

### ✨ Key Features

* Debounced search with a simulated async API to avoid triggering requests on every keystroke
* Conditional rendering of loading and empty states during search
* Expandable search results with minimal Vue transitions
* Responsive layout for both mobile and desktop screens
* Guarded async updates to prevent stale search results from overwriting newer ones

---

### 🧠 Architecture & Design Decisions

* **Parent-owned state management**
  The parent component owns all shared state, while child components emit events. This follows Vue’s data flow pattern and ensures a single source of truth across components.

* **Debounced search logic**
  Debouncing is used to prevent unnecessary backend requests while the user is still typing, reducing wasted computation and improving performance.

* **Immediate loading feedback**
  The loading state is set immediately when the user starts typing to avoid empty-state flicker during the debounce delay and to provide clear feedback that a search is in progress.

* **Async race-condition handling**
  Search results are applied only if they match the latest query, preventing stale async responses from overwriting newer results.

* **Minimal transitions**
  Vue transitions are used only for expand/collapse interactions to keep animations subtle and non-distracting.

---

### ▶️ How to Run the Project

1. Clone the repository
2. Install dependencies

   ```bash
   npm install
   ```
3. Start the development server

   ```bash
   npm run dev
   ```

---

### 🚀 Possible Improvements

* Pagination or list virtualization for large datasets
* Integration with a real backend API
* Keyboard navigation and accessibility improvements

---

