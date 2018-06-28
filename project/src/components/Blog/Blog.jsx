import React, {Component} from 'react';

export default class Blog extends Component {
    render(){
        const { blog, onLoadMore } = this.props;

        return(
            <div>
                <ul>
                    {blog.map(blog => <li key={blog.id}><a href="#"><span>{blog.id}:</span>{blog.title}</a></li>)}
                </ul>
                <button onClick={onLoadMore}>Load more</button>
            </div>
        );
    }
}