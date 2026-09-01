import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetails from "./pages/TodoDetails";

function App() {
	const [todos, setTodos] = useState([]);
const [theme, setTheme] = useState("light");
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const stored = localStorage.getItem("todos");
  if (stored) {
    setTodos(JSON.parse(stored));
  }
  setIsLoaded(true);
}, []);

useEffect(() => {
  if (isLoaded) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}, [todos, isLoaded]);






	const handleAddTodo = (text , description) => {
		const newTodo = {
			id: Date.now(),
			title: text,
			description: description,
			completed: false,
			createdAt: new Date().toISOString()
		};
		setTodos([...todos, newTodo]);
	};

	const handleCompleteTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const handleDeleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleToggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<BrowserRouter basename="/todo">
			<div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								todos={todos}
								theme={theme}
								onAdd={handleAddTodo}
								onComplete={handleCompleteTodo}
								onDelete={handleDeleteTodo}
								onToggleTheme={handleToggleTheme}
							/>
						}
					/>
					<Route path="/todo/:id" element={<TodoDetails todos={todos} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
