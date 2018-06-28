import React , { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Menu from 'components/Menu';

import './style.css';

import routes from './routes';
import store from './store';

const menuItems = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/blog',
        title: 'Blog'
    },
    {
        href: '/users',
        title: 'Users'
    },
    {
        href: '/comments',
        title: 'Comments'
    }
];
class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <Fragment>
                            <Menu items={menuItems} />
                            <Switch>
                                {routes.map((route) => <Route {...route} />)}
                            </Switch>
                        </Fragment>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
