# Todo App

A simple and modern task management app built with React. It helps users organize daily tasks, mark them complete, search through them, and switch between light and dark themes.

## Features

- Add new todos with a title and description
- Mark tasks as complete or incomplete
- Delete tasks you no longer need
- Search todos in real time
- View detailed information for each task
- Toggle between light and dark theme
- Save todos locally using browser storage
- Responsive UI for desktop and smaller screens

## Tech Stack

- React
- React Router
- Bootstrap
- React Bootstrap
- JavaScript

## Project Structure

```bash
todo/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddTodoForm.js
│   │   ├── SearchBar.js
│   │   ├── Stats.js
│   │   ├── ThemeToggle.js
│   │   ├── TodoList.js
│   │   └── TodoListItem.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── TodoDetails.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── .gitignore
```

## Demo

This project is a personal productivity app with a clean, user-friendly interface. It is suited for managing small to medium task lists and can be extended with features like editing tasks, categories, deadlines, or a backend API.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the project folder:

```bash
cd todo
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app will run in your browser at:

```text
http://localhost:3000
```

## Production Build

To create a production-ready build:

```bash
npm run build
```

This generates the optimized output in the `build` folder.

## Pushing to GitHub

If you want to publish this project on GitHub, use the following commands:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

If the repository already exists and you just want to connect it:

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

## Future Improvements

Possible upgrades for this app include:

- Edit existing todo items
- Add due dates and priorities
- Save data to a backend database
- Add user authentication
- Drag-and-drop task organization
- Export/import todo data

## Author

This project was created as a frontend todo application for learning and practical use.

## Notes

Todos are stored in the browser using `localStorage`, so they remain available after refresh unless the storage is cleared.
