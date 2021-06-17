import React from "react";

const TodoItem = ({ todo, todoList, setTodoList }) => {
	const removeTodo = () => {
		const newTodoList = todoList.filter((item) => item !== todo);
		setTodoList(newTodoList);
	};

	return (
		<li className="list-none font-normal text-base p-2 flex justify-between items-center">
			{todo}{" "}
			<div className="text-red-400" onClick={removeTodo}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</div>
		</li>
	);
};

export default TodoItem;
