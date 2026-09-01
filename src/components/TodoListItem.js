import { Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TodoListItem({ todo, onComplete, onDelete }) {
  return (
    <Card className="p-3">
      <div className="d-flex justify-content-between align-items-center">
        <Link
          to={`/todo/${todo.id}`}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#888' : 'inherit',
            fontWeight: 500,
          }}
        >
          {todo.title}
        </Link>

        <div className="d-flex align-items-center gap-2">
          {todo.completed && <Badge bg="success">Done</Badge>}
          <Button
            variant={todo.completed ? 'outline-secondary' : 'outline-success'}
            size="sm"
            onClick={() => onComplete(todo.id)}
          >
            {todo.completed ? 'Undo' : 'Complete'}
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default TodoListItem;