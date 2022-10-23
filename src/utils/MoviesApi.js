class MoviesApi {
    constructor(baseUrl) {
        this.headers = {
            'Content-Type': 'application/json'
        };
        this._baseUrl = baseUrl;
    }

    getAll() {
        this.url = this._baseUrl;
        return fetch(this.url, {
            headers: this.headers
        }).then(res => this._getResponseData(res))
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}

export const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
