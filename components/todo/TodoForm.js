import React, { useState } from "react";

const TodoForm = ({ todoList, setTodoList }) => {
	const [todo, setTodo] = useState("");
	const handleTodo = (e) => {
		e.preventDefault();
		if (todo) {
			setTodoList([...todoList, todo]);
			setTodo("");
			return;
		}
		alert("Todo cannot be empty");
	};

	return (
		<form onSubmit={handleTodo} className="mb-4">
			<input
				value={todo}
				placeholder="Write your todo"
				name="todo"
				onChange={(e) => setTodo(e.target.value)}
				type="text"
				className="px-2 py-2 rounded font-mono text-base text-black focus:outline-none w-full bg-gray-50 border-2 border-gray-400"
			/>
			<button
				type="submit"
				className="w-full mt-2 p-2 bg-blue-500 font-semibold text-base text-white focus:outline-none"
			>
				Add Todo
			</button>
		</form>
	);
};

export default TodoForm;
