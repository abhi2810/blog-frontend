import React, { Component } from 'react'
import {
    Card,
    CardContent,
    CardActions,
    Button,
    CardMedia
} from '@material-ui/core'
import {
    Route
} from 'react-router-dom'

export class PostElement extends Component {
    cardstyle = {}
    render() {
        return (
            <Card style={{backgroundColor: '#008080', width: '600px' }}>
                <CardMedia
                    style={{objectFit:'cover', height:'150px'}}
                    alt="title"
                    image={this.props.post.poster.startsWith('http')?this.props.post.poster:'/assets/placeholder.png'}
                    title="title"
                />
                <CardContent style={{color:'#fff'}}>
                    <h4>{this.props.post.title}</h4>
                    <p>
                        {this.props.post.content.length>100?this.props.post.content.substring(0,100)+'....':this.props.post.content}
                    </p>
                </CardContent>
                <CardActions>
                    <Button variant='contained' onClick={()=>this.props.deletePost(this.props.post.id)} style={{backgroundColor:'#fff',color:'#f00',flexGrow:1}} size="small">Delete</Button>
                    <Route render={({history})=>{
                        return <Button onClick={()=>history.push({pathname: '/post',state:{post:this.props.post}})} variant='contained' style={{backgroundColor:'#fff',color:'#008080',flexGrow:1}} size="small">Read More</Button>
                    }}/>
                </CardActions>
            </Card>
        )
    }
}

export default PostElement
