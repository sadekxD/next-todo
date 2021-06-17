import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
	console.log(todoList.reverse());
	return (
		<div>
			{todoList.length !== 0 ? (
				todoList.map((todo, i) => (
					<TodoItem
						key={todo + i}
						todo={todo}
						todoList={todoList}
						setTodoList={setTodoList}
					/>
				))
			) : (
				<p className="text-center">No todo left</p>
			)}
		</div>
	);
};

export default TodoList;
