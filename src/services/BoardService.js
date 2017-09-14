import api from '../config/api';

export function getBoards() {
  return api.get('/boards');
}

export function getBoard(id) {
  return api.get(`/boards/${id}`);
}

export function deleteBoard(id) {
  return api.delete(`/boards/${id}`);
}

export function addBoard(name, color) {
  return api.post(`/boards`, { name, color });
}
