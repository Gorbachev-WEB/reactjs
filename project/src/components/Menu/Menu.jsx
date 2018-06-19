import './Menu.css';

import React, { Component } from 'react';

export default class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0
        }
    }

    setActiveTab = (e) =>{
        this.setState({
            activeTab: Array.prototype.indexOf.call(e.target.parentNode.children, e.target)
        });

        e.preventDefault();
    }

    render(){
        const { items } = this.props;
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    {items.map((item, idx) => {
                        if(idx == this.state.activeTab){
                            return <a href={item.href} className="active" onClick={this.setActiveTab}>{item.title}</a>;
                        }
                        return <a href={item.href} onClick={this.setActiveTab}>{item.title}</a>;
                    })}
                </div>
            </div>
        );
    }
}
