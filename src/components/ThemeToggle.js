import { Button } from 'react-bootstrap';

function ThemeToggle({ theme, onToggle }) {
  return (
    <Button variant="secondary" onClick={onToggle} className="mb-3">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}

export default ThemeToggle;