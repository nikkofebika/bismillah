import axios from 'axios';
import React, { Component } from 'react'
import Tabel from "./Tabel";
import Formulir from "./Formulir";
import { Container, Col, Row, Form } from 'react-bootstrap';

class Api extends Component {
    constructor() {
        super();
        this.state = {
            dataPost: {
                id: 0,
                title: '',
                author: ''
            },
            datas: [],
            edit: false
        }
    }

    componentDidMount() {
        console.log('componentDidMount API');
        this.getDatas();
    }

    clearForm = () => {
        let newDataPost = { ...this.state.dataPost }
        newDataPost['id'] = '';
        newDataPost['title'] = '';
        newDataPost['author'] = '';
        this.setState({
            dataPost: newDataPost
        })
    }

    getDatas = () => {
        axios.get('http://localhost:3004/posts').then(res => {
            this.setState({
                datas: res.data,
                edit: false
            })
        })
    }

    handleDelete = (id) => {
        fetch(`http://localhost:3004/posts/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.statusText === 'OK') {
                this.getDatas()
            }
        });
    }

    handleChange = (e) => {
        let newDataPost = { ...this.state.dataPost }
        if (!this.state.edit) {
            newDataPost['id'] = new Date().getTime();
        }
        newDataPost[e.target.name] = e.target.value;
        this.setState({
            dataPost: newDataPost
        }, () => console.log(this.state.dataPost))
    }

    handleSubmitForm = () => {
        if (this.state.edit === false) {
            axios.post('http://localhost:3004/posts', this.state.dataPost).then(res => {
                if (res.statusText === 'Created') {
                    this.getDatas();
                }
            })
        } else {
            axios.put(`http://localhost:3004/posts/${this.state.dataPost.id}`, this.state.dataPost).then(res => {
                if (res.statusText === 'OK') {
                    this.getDatas();
                }
            })
        }
        this.clearForm()
    }

    handleEdit = (id) => {
        axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            if (res.statusText === 'OK') {
                this.setState({
                    dataPost: res.data,
                    edit: true
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col><h2>Bermain API</h2></Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Formulir {...this.state.dataPost} handleChange={this.handleChange} handleSubmitForm={this.handleSubmitForm} />
                    </Col>
                    <Col md={8}>
                        <Tabel datas={this.state.datas} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
                        {/* <Table striped bordered hover>
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
                                {this.state.datas.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.id}</td>
                                            <td>{data.author}</td>
                                            <td>{data.title}</td>
                                            <td>
                                                <button value={data.id} onClick={this.handleDelete}>Hapus</button>
                                                <button value={data.id} onClick={this.handleEdit}>Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Api
