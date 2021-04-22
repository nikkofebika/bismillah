import { Table } from "react-bootstrap";
const Tabel = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.datas.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.id}</td>
                            <td>{data.author}</td>
                            <td>{data.title}</td>
                            <td>
                                <button onClick={() => props.handleDelete(data.id)}>Hapus</button>
                                <button onClick={() => props.handleEdit(data.id)}>Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Tabel