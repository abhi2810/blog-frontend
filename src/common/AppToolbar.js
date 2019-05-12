import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Icon,
    Tooltip
} from '@material-ui/core'
import { Route } from 'react-router-dom'

export class AppToolbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar style={{backgroundColor:'#008080'}}>
                        <Typography style={{ flexGrow: 1 }} variant="h6" color="inherit">
                            <Route render={({ history }) => {
                                return <Button style={{ color: '#fff' }} onClick={()=>history.push('/')}>
                                        abhi.codes
                                    </Button>
                            }} />
                        </Typography>
                        <Route render={({ history }) => {
                            return <Tooltip title="Add" aria-label="Add">
                                <IconButton color="inherit" onClick={() => history.push('/addpost')}>
                                    <Icon>add</Icon>
                                </IconButton>
                            </Tooltip>
                        }} />
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default AppToolbar
