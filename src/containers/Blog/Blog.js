import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';

import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
const ASyncNewPost = asyncComponent(() => { 
    return import('./NewPost/NewPost');
 });



class Blog extends Component {
    state = {
        auth: true
    };


    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="active"
                                activeStyle={{textDecoration: "underline"}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Hello world</h1>} />
                <Route path="/" render={() => <h1>Hello world</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={ASyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />  
                    <Route render={() => <h1>Not Found!</h1>} />
                    {/* <Redirect from="/" to="/posts" />               */}
                </Switch>
            </div>
        );
    }
}

export default Blog;