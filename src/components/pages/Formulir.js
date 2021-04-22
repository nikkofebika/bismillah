import { Form } from "react-bootstrap"

const Formulir = (props) => {
    return (
        <div>
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" value={props.author} placeholder="Author" onChange={(e) => props.handleChange(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={props.title} placeholder="Title" onChange={(e) => props.handleChange(e)} />
            </Form.Group>
            <button onClick={props.handleSubmitForm}>Save</button>
        </div>
    )
}

export default Formulir