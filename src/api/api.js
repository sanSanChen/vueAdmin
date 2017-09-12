import axios from 'axios';

let base = '';
//此处所有axios请求会被对应的mock拦截-->见mock.js
//验证登陆
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
//获取用户列表
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
//获取当前页面列表
export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };