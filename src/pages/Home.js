import { useState, useMemo } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import Stats from '../components/Stats';

function Home({ todos, theme, onAdd, onComplete, onDelete, onToggleTheme }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);

  return (
    <Container className="app-container py-5" style={{ maxWidth: '580px',marginLeft:'90px' }}>
      <Row className="align-items-center mb-4">
        <Col>
          <h1 className="mb-0" style={{ textAlign: 'center' }}>My Todos</h1>
        </Col>
        <Col xs="auto">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </Col>
      </Row>

      <Card className="mb-4 p-3">
        <Stats todos={todos} />
        <AddTodoForm onAdd={onAdd} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </Card>

      <TodoList todos={filteredTodos} onComplete={onComplete} onDelete={onDelete} />
    </Container>
  );
}

export default Home;