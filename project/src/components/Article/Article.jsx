import './Article.css';
import React, { Component } from 'react';

export default class Article extends Component{
    render(){
        const { options } = this.props;
        return (
            <div className="article">
                <h2>{options.header}</h2>
                <p>{options.content}</p>
            </div>
        );
    }
}
