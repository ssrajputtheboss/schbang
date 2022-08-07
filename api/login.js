import axios from 'axios';
import { API_URL } from '../constants';

export async function login(data) {
  return await axios.post(`${API_URL}/login`, data);
}

export async function getPosts() {
  return await axios.get(`${API_URL}/getPosts`);
}

export async function addPost(data) {
  return await axios.post(`${API_URL}/addPost`, data);
}

export async function likePost(data) {
  return await axios.post(`${API_URL}/likePost`, data);
}

export async function commentPost(data) {
  return await axios.post(`${API_URL}/likePost`, data);
}

export async function pinPost() {
  return await axios.post(`${API_URL}/pinPost`, data);
}

export async function sendMessage(data) {
  return await axios.post(`${API_URL}/sendMessage`, data);
}

export async function getMessages() {
  return await axios.get(`${API_URL}/getMessages`);
}

export async function getToDos() {
  return await axios.get(`${API_URL}/getToDos`);
}

export async function addToDo(data) {
  return await axios.post(`${API_URL}/addToDo`, data);
}
