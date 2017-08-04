const getValue = key => {
  const encodedKey = window.btoa(key);
  const encodedValue = window.localStorage.getItem(encodedKey);
  const stringValue = encodedValue && window.atob(encodedValue);
  return JSON.parse(stringValue);
};

const setValue = (key, value) => {
  const encodedKey = window.btoa(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = window.btoa(stringValue);
  return window.localStorage.setItem(encodedKey, encodedValue);
};

const removeValue = key => {
  const encodedKey = window.btoa(key);
  return window.localStorage.removeItem(encodedKey);
};

export function setSessionToken(sessionToken) {
  return setValue('@@AUTH:session_token', sessionToken);
}

export function getSessionToken() {
  return getValue('@@AUTH:session_token');
}

export function removeSessionToken() {
  return removeValue('@@AUTH:session_token');
}
