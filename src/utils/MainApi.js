class MainApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NzllNzA2YmY0MjczZDZjMWFjNDgiLCJpYXQiOjE2NzE0MzIwODEsImV4cCI6MTY3MjAzNjg4MX0.4yb0X5jnnCDkjR1LnNP2hgK4sTOEAsVLgxfikbNGe8g`,
        'Content-Type': 'application/json',
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NzllNzA2YmY0MjczZDZjMWFjNDgiLCJpYXQiOjE2NzE0MzIwODEsImV4cCI6MTY3MjAzNjg4MX0.4yb0X5jnnCDkjR1LnNP2hgK4sTOEAsVLgxfikbNGe8g`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NzllNzA2YmY0MjczZDZjMWFjNDgiLCJpYXQiOjE2NzE0MzIwODEsImV4cCI6MTY3MjAzNjg4MX0.4yb0X5jnnCDkjR1LnNP2hgK4sTOEAsVLgxfikbNGe8g`,
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(movie),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
  }

}

export const mainApi = new MainApi({
  baseUrl: 'https://bitfilms.smirnov.api.nomoredomains.icu',
  headers: {},
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NzllNzA2YmY0MjczZDZjMWFjNDgiLCJpYXQiOjE2NzE0MzIwODEsImV4cCI6MTY3MjAzNjg4MX0.4yb0X5jnnCDkjR1LnNP2hgK4sTOEAsVLgxfikbNGe8g
