import {Form} from 'react-bootstrap';

function SearchBar({searchTerm, onSearchChange}) {
    return (
        <Form.Control
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="mb-3"
        />
    );
}
export default SearchBar;