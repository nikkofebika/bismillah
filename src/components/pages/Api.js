import axios from 'axios';
import React, { Component } from 'react'

class Api extends Component {
    constructor() {
        super();
        this.state = {
            dataPost: {
                id: 0,
                title: '',
                author: ''
            },
            datas: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount API');
        this.getDatas();
    }

    getDatas = () => {
        axios.get('http://localhost:3004/posts').then(res => {
            this.setState({
                datas: res.data
            })
        })
    }

    handleDelete = (e) => {
        fetch(`http://localhost:3004/posts/${e.target.value}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.statusText === 'OK') {
                this.getDatas()
            }
        });
    }

    handleChange = (e) => {
        let newDataPost = { ...this.state.dataPost }
        newDataPost['id'] = new Date().getTime();
        newDataPost[e.target.name] = e.target.value;
        this.setState({
            dataPost: newDataPost
        }, () => console.log(this.state.dataPost))
    }

    handleSubmitForm = () => {
        axios.post('http://localhost:3004/posts', this.state.dataPost).then(res => {
            if (res.statusText === 'Created') {
                this.getDatas();
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Data Artikel</h2>
                <div style={{ border: '1px solid black', marginBottom: '5px', padding: '10px', borderRadius: '4px' }}>
                    <div>
                        <input type="text" name="author" placeholder="Author" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmitForm}>Submit</button>
                </div>
                {this.state.datas.map((data, index) => {
                    return (
                        <div key={index} style={{ background: 'aqua', padding: '10px', marginBottom: '5px' }}>
                            <p>ID : {data.id}</p>
                            <p>Author : {data.author}</p>
                            <p>Title : {data.title}</p>
                            <button value={data.id} onClick={this.handleDelete}>Hapus</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Api
