import './Login.css';
import React, { Component } from 'react';

export default class Login extends Component{
    render(){
        return (
            <div className="login">
                <form action="#" method="post">
                    <input type="text"/>
                    <input type="password"/>
                    <input type="submit" value="Log me in"/>
                </form>
            </div>
        );
    }
}
