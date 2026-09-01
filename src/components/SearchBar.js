import {Form} from 'react-bootstrap';

function SearchBar({searchTerm, onSearchchange}) {
    return (
        <Form.Control
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => onSearchchange(e.target.value)}
            className="mb-3"
        />
    );
}
export default SearchBar;