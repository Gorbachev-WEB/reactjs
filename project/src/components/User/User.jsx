import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default class User extends PureComponent {
    render(){
        const { user } = this.props;

        return(
            <div>
                {user.name} ( {user.username} )
                <a href={`mailto:${user.email}`}>Email me</a>
            </div>
        );
    }
}