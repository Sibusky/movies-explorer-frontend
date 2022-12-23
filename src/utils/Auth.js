class Auth {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

// // Проверяю ответ сервера
// checkResponse(res) {
//     return res.ok
//       ? res.json()
//       : Promise.reject(`Ошибка: статус ${res.status} сообщение ${res.message}`);
//   }

  // Регистрация пользователя
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(checkResponse);
  }

  // Авторизация пользователя
  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResponse);
  }

  // Получение информации о текущем пользователе
  getCurrentUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(checkResponse);
  }
}

export const auth = new Auth({
  baseUrl: 'https://bitfilms.smirnov.api.nomoredomains.icu',
  headers: {},
});


// Проверяю ответ сервера
function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка: статус ${res.status} сообщение ${res.message}`);
}

// export const BASE_URL = 'https://bitfilms.smirnov.api.nomoredomains.icu';

// // Функция регистрации пользователя
// export function register(name, email, password) {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, email, password }),
//   }).then(checkResponse);
// }

// // Функция авторизации пользователя
// export function authorize(email, password) {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(checkResponse);
// }

// // Получаю информацию о текущем пользователе
// export function getContent() {
//   // token
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NzllNzA2YmY0MjczZDZjMWFjNDgiLCJpYXQiOjE2NzE0MzIwODEsImV4cCI6MTY3MjAzNjg4MX0.4yb0X5jnnCDkjR1LnNP2hgK4sTOEAsVLgxfikbNGe8g`,
//       // 'Authorization': `Bearer ${token}`,
//     },
//   }).then(checkResponse);
// }
