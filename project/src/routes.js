import Comments from 'containers/CommentsContainer';
import UserList from 'containers/UserListContainer';
import User from 'containers/UserContainer';
import Blog from 'containers/BlogContainer';
import HomePage from 'components/HomePage';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/comments',
        exact: true,
        component: Comments,
    },
    {
        path: '/users',
        exact: true,
        component: UserList,
    },
    {
        path: '/users/:id',
        exact: true,
        component: User,
    },
    {
        path: '/blog',
        exact: true,
        component: Blog,
    },
]