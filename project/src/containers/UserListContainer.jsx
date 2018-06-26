import React, {Component, Fragment} from 'react';

import UserList from 'components/UserList';

export default class UserListContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            users: []
        };
    }

    componentDidMount(){
        this.setState({loading: true});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState({
                    loading: false,
                    users
                });
            })
            .catch(() => {
                this.setState({loading: false});
            });
    }

    render(){
        const {users, loading} = this.state;

        return(
            <Fragment>
                {loading ? <div>Loading...</div> : <UserList users={users} /> }
            </Fragment>
        );
    }
}