import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      return;
    }

    onAdd(text.trim(), description.trim());
    setText('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Control
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mb-2"
      />
      <Form.Control
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-2"
      />
      <Button type="submit" variant="primary">Add</Button>
    </Form>
  );
}

export default AddTodoForm;