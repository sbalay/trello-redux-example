import api from '../config/api';
import * as LocalStorageService from './LocalStorageService';

const AUTH_HEADER = 'Authorization';

export function authInit() {
  const currentSessionToken = LocalStorageService.getSessionToken();
  if (currentSessionToken) {
    api.setHeader(AUTH_HEADER, currentSessionToken);
    return true;
  }
  return false;
}

export async function fetchCurrentUser() {
  let currentUser;
  const response = await api.get('/users');
  if (response.ok) {
    currentUser = response.data;
  }
  return currentUser;
}
