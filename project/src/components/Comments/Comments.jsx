import React, {Component} from 'react';

export default class Comments extends Component {
    render(){
        const { comments, onLoadMore } = this.props;

        return(
            <div>
                <ul>
                    {comments.map(comment => <li key={comment.id}><a href="#"><span>{comment.id}:</span>{comment.name}</a><p>{comment.body}</p></li>)}
                </ul>
                <button onClick={onLoadMore}>Load more</button>
            </div>
        );
    }
}