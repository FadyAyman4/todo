import TodoListItem from './TodoListItem';

function TodoList({ todos, onComplete, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-muted mt-4">No todos yet — add one above!</p>;
  }

  return (
    <div className="d-flex flex-column gap-2">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;