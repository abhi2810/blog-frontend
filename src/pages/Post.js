import React, { Component } from 'react'
import { 
    CardActions, 
    Card,
    CardContent,
    CardMedia
} from '@material-ui/core';
import {Route} from 'react-router-dom';

export class Post extends Component {

    componentDidMount(){
        console.log(this.props.location.state)
    }

    render() {
        const post=this.props.location.state.post
        return (
            <Card style={{ margin: '40px' }}>
                <CardMedia
                    style={{objectFit:'fit', height:'350px'}}
                    alt="title"
                    image={post.poster.startsWith('http')?post.poster:'/assets/placeholder.png'}
                    title="title"
                />
                <CardContent>
                    <h1>{post.title}</h1>
                    <h4>{post.content}</h4>
                </CardContent>
                <CardActions>
                <Route render={({history})=>{
                        return <button onClick={()=>{history.push({pathname: '/addpost',state:{editpost:post}})}} className="btn btn-primary" >Update</button>
                }} />
                </CardActions>
            </Card>
        )
    }
}

export default Post
