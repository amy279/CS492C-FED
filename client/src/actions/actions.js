import types from './types';
import { request } from '../utils/axios';

const USER_URL = '/api/user';
const POST_URL = '/api/post';

export async function getAllUser() {
  const data = await request('get', USER_URL + '/users', null);
  var uusers = [];
  var i;
  for (i = 0; i < data.length; i++) {
    uusers.push(Object.values(data[i]));
  }
  return {
    type: types.GET_ALL_USERS,
    payload: uusers,
  };
}

export async function getAllPost() {
  const data = await request('get', POST_URL + '/posts', null);
  var postlist = [];
  var i;
  for (i = 0; i < data.length; i++) {
    // console.log('dd : ' + Object.values(data[i]));
    postlist.push(Object.values(data[i]));
  }
  return {
    type: types.GET_ALL_POSTS,
    payload: postlist,
  };
}

export function registerUser(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    console.log("userID is none");
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  // const data = request('post', USER_URL + '/register', dataToSubmit);
  request('post', USER_URL + '/register', dataToSubmit);
  return {
    type: types.REGISTER_USER,
    payload: '',
  };
}

export function modifyUser(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    return {
      type: types.REGISTER_USER,
      payload: '',
    };
  }
  const data = request('post', USER_URL + '/modifyuser', dataToSubmit);
  return {
    type: types.MODIFY_USER,
    payload: data,
  };
}

export function registerPost(dataToSubmit) {
  if (dataToSubmit['userID'] == '') {
    console.log("userID is none");
    return {
      type: types.REGISTER_POST,
      payload: '',
    };
  }
  request('post', POST_URL + '/register', dataToSubmit);
  return {
    type: types.REGISTER_POST,
    payload: '',
  };
}

export function userLogined(userdata) {
  return {
    type: types.USER_LOGINED,
    payload: userdata,
  };
}

export async function getCurrentPostsNumInfo() {
  const _data = await request('get', POST_URL + '/currentposts', null);
  const data = Object.values(_data);
  console.log(data[0]);
  console.log(data[1]);
  return {
    type: types.GET_ALL_POSTS,
    payload1: data[0],
    payload2: data[1],
  };
}

export function updatePostNum(dataToSubmit) {
  if (dataToSubmit['num_of_total_posts'] == '' || dataToSubmit['current_top_post_num'] == '') {
    console.log('data is none');
    return {
      type: types.UPDATE_POST_NUM,
      payload: '',
    }
  }
  const data = request('post', USER_URL + '/updatepostnum', dataToSubmit);
  return {
    type: types.UPDATE_POST_NUM,
    payload1: data[0],
    payload2: data[1],
  };
}
