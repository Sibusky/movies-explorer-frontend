// Проверяю ответ сервера
function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(res.status);
}

class Auth {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

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
        Authorization: `Bearer ${token}`,
      },
    }).then(checkResponse);
  }
}

export const auth = new Auth({
  baseUrl: 'https://bitfilms.smirnov.api.nomoredomains.icu',
  headers: {},
});
