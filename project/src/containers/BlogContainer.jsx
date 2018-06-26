import React, {Component, Fragment} from 'react';

import Blog from 'components/Blog';

export default class BlogContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            page: 1,
            blog: []
        };
    }

    load(){
        const {page, blog} = this.state;
        if(page === 1){
            this.setState({loading: true});
        }
        fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&_page=${page}`)
            .then((response) => response.json())
            .then((results) => {
                this.setState({
                    loading: false,
                    page: page + 1,
                    blog: blog.concat(results)
                });
            })
            .catch(() => {
                this.setState({loading: false});
            });
    }

    componentDidMount(){
        this.load();
    }

    handleLoadMore =() => {
        this.load();
    };

    render(){
        const {blog, loading} = this.state;

        return(
            <Fragment>
                {loading ? <div>Loading...</div> : <Blog onLoadMore={this.handleLoadMore} blog={blog} /> }
            </Fragment>
        );
    }
}