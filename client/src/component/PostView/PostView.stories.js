import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import PostView from './PostView';

const store = {
    getState: () => {
        return {
            user : 
            {
                postList: [
                    ["619bacaa929ca700ee96d13a",100,'제목',2,3,'dain','2021-11-25T08:19:11.645Z',10,'내용',['dain','dain2']]
                ],
                loginUser: {
                    userID: 'dain',
                    password: '123444',
                },
                pastPageNumber: 1,
            }
        };
    },
    subscribe: () => {},
    dispatch: action('editPost')
};

const withReduxMockStore = (story) => (
    <Provider store={store}>{story()}</Provider>
)

export default {
    title : 'PostView component',
    component: PostView,
    decorators: [withReduxMockStore],
};

const PostViewComponent = args => <PostView {...args}/>;
const match_100 = {
    params: {
        no: 100,
    },
}

const match_200 = {
    params: {
        no: 200,
    },
}

const match_244 = {
    params: {
        no: 244,
    },
}

export const Default = PostViewComponent.bind({});
Default.args = {
    match: match_100,
}

export const Post200 = PostViewComponent.bind({});
Post200.args = {
    match: match_200,
}

export const Post244 = PostViewComponent.bind({});
Post244.args = {
    match: match_244,
}

PostViewComponent.story = {
    name: 'PostView',
};