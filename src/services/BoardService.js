import api from '../config/api';

export function getBoards() {
  return api.get('/boards');
}

export function getBoard(id) {
  return api.get(`/boards/${id}`);
}
