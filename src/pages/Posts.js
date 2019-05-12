import React, { Component } from 'react'
import {
    GridList,
    GridListTile
} from '@material-ui/core';
import PostElement from '../common/PostElement';

export class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts() {
        fetch('http://localhost:8082/post')
            .then(
                (response)=>{
                    response.json().then(
                        (data)=>{
                            this.setState({posts: data})
                            console.log(data)
                        }
                    )
                }
            )
    }

    deletePost= (id) => {
        fetch('http://localhost:8082/post/id/'+id,{method: 'DELETE'})
        .then(
            (response)=>{
                this.setState({ posts: [...this.state.posts.filter(post => post.id !== id)] })
            }
        )

    }

    render() {
        const postItems = this.state.posts.map(post => (
            <GridListTile key={post.id} cols={1 || 1}>
                <PostElement post={post} deletePost={this.deletePost}/>
            </GridListTile>
        ));
        return (
            this.state.posts.length === 0?
            <div style={{margin:'50px'}}>
                <h1>Click on the + button to add posts.</h1>
            </div>:
            <div style={{ margin: "30px" }}>
                <GridList cellHeight={400} cols={2}>
                    {postItems}
                </GridList>
            </div>
        )
    }
}

export default Posts
