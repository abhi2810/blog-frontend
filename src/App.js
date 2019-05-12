import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AppToolbar from './common/AppToolbar';
import Posts from './pages/Posts';
import Post from './pages/Post';
import AddPost from './pages/AddPost';

class App extends React.Component {

  render() {
    return <BrowserRouter>
        <div>
          <AppToolbar />
          <Route exact path="/" component={Posts} />
          <Route path="/post" component={Post} />
          <Route path="/addpost" component={AddPost} />
        </div>
      </BrowserRouter >
  }
}

export default App;
