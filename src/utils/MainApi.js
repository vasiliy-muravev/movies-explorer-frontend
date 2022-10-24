import {getCookie} from "./cookie";

class MainApi {
    constructor(baseUrl, token) {
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
        this._baseUrl = baseUrl;
    }

    getUserInfo(token) {
        return Promise.all([this.checkAuthorize(token), this.getUserMovies()]);
    }

    // getUserData() {
    //     this.url = this._baseUrl + 'users/me';
    //     return fetch(this.url, {
    //         headers: this.headers,
    //         credentials: 'include',
    //     }).then(res => this._getResponseData(res))
    // }

    getUserMovies() {
        this.url = this._baseUrl + 'movies';
        return fetch(this.url, {
            headers: this.headers,
            credentials: 'include',
        }).then(res => this._getResponseData(res))
    }

    register(email, password) {
        this.url = this._baseUrl + 'signup';
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({email, password})
        }).then(res => this._getResponseData(res));
    }

    authorize(email, password) {
        this.url = this._baseUrl + 'signin';
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({email, password})
        }).then(res => this._getResponseData(res));
    }

    checkAuthorize(token) {
        this.url = this._baseUrl + 'users/me';
        return fetch(this.url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(res => this._getResponseData(res));
    }

    addMovie(movie) {
        this.url = this._baseUrl + 'movies';
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify(movie)
        }).then(res => this._getResponseData(res));
    }

    deleteMovie(movieId) {
        this.url = this._baseUrl + 'movies/' + movieId;
        return fetch(this.url, {
            method: 'DELETE',
            headers: this.headers,
            credentials: 'include',
        }).then(res => this._getResponseData(res));
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}

export const mainApi = new MainApi('https://api.vasiliymuravev.nomorepartiesxyz.ru/', getCookie('jwt'));
