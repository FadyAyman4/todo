import { useParams, Link } from 'react-router-dom';
import { Container, Card, Badge, Button } from 'react-bootstrap';

function TodoDetails({ todos }) {
  const { id } = useParams();
  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <Container className="py-5" style={{ maxWidth: '600px' }}>
        <p>Todo not found.</p>
        <Link to="/">&larr; Back to list</Link>
      </Container>
    );
  }

  return (
    <Container className="app-container py-5" style={{ maxWidth: '580px',marginLeft:'90px' }}>
 <Link to="/" className="back-link d-inline-flex align-items-center mb-3">
  &larr; Back to list
</Link>

      <Card className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h2 className="mb-0">{todo.title}</h2>
          <Badge bg={todo.completed ? 'success' : 'secondary'}>
            {todo.completed ? 'Completed' : 'Pending'}
          </Badge>
        </div>

        <p className="text-muted mb-1">Description</p>
        <p className="mb-3">{todo.description || 'No description provided.'}</p>

        <p className="text-muted mb-1">Created</p>
        <p className="mb-0">
          {new Date(todo.createdAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </Card>
    </Container>
  );
}

export default TodoDetails;