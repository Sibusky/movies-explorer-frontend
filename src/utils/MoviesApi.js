class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getInitialMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          }
        })
          .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      }

}

export const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co",
    headers: {},
  });