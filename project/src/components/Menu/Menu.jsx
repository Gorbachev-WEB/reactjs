import './Menu.css';

import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import classNames from 'classnames';

class Menu extends Component{
    render(){
        const { items, location } = this.props;
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    {items.map((item) => <Link to={item.href} className={classNames({ active: (location.pathname === item.href && item.href === '/' || location.pathname.indexOf(item.href) === 0  && item.href !== '/')})}>{item.title}</Link>)}
                </div>
            </div>
        );
    }
}

export default withRouter(Menu);