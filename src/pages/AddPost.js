import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core';

export class AddPost extends Component {

    state = {
        editing: false,
        post: {
            id: "",
            title: "",
            content: "",
            poster: ""
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.setState({ post: this.props.location.state.editpost, editing: true });
            console.log(this.props.location.state.editpost);
        }
    }

    addPost = (e) => {
        e.preventDefault()
        if (this.state.editing) {
            fetch('http://localhost:8082/post/id/' + this.state.post.id, { method: 'DELETE' })
                .then(
                    (response) => {
                        fetch('http://localhost:8082/post', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(this.state.post)
                        }).then(
                            res => {
                                console.log(res)
                                this.props.history.push('/')
                            }
                        ).catch(err => {
                            console.log(err)
                            //this.props.history.push('/')
                        })
                    }
                )
        } else {
            fetch('http://localhost:8082/post', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.state.post)
            }).then(
                res => {
                    console.log(res)
                    this.props.history.push('/')
                }
            ).catch(err => {
                console.log(err)
                //this.props.history.push('/')
            })
        }
    }

    onChange = (e) => {
        if (e.target.name === 'title') {
            this.setState(
                {
                    post: {
                        title: e.target.value,
                        content: this.state.post.content,
                        poster: this.state.post.poster
                    }
                }
            )
        } else if (e.target.name === 'content') {
            this.setState(
                {
                    post: {
                        title: this.state.post.title,
                        content: e.target.value,
                        poster: this.state.post.poster
                    }
                }
            )
        } else {
            this.setState(
                {
                    post: {
                        title: this.state.post.title,
                        content: this.state.post.content,
                        poster: e.target.value,
                    }
                }
            )
        }
    }

    render() {

        return (
            <Card style={{ margin: '40px' }}>
                <CardContent>
                    <form onSubmit={this.addPost}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input onChange={this.onChange} value={this.state.post.title} className="form-control" type="text" name="title" placeholder="Title" required />
                        </div>
                        <div className="form-group">
                            <label>Content:</label>
                            <textarea onChange={this.onChange} value={this.state.post.content} rows={8} className="form-control" name="content" placeholder="Content" required />
                        </div>
                        <div className="form-group">
                            <label>Poster Url:</label>
                            <input onChange={this.onChange} value={this.state.post.poster} className="form-control" type="text" name="poster" placeholder="Poster Url" required />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add Post" />
                    </form>
                </CardContent>
            </Card>
        )
    }
}

export default AddPost
