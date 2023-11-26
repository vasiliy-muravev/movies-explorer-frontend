import Cookies from 'js-cookie';

const {NODE_ENV} = process.env;

class MainApi {
    constructor(baseUrl) {
        this.headers = {
            'Content-Type': 'application/json'
        }
        this._baseUrl = baseUrl;
    }

    getUserInfo(token) {
        return Promise.all([this.checkAuthorize(token), this.getUserMovies()]);
    }

    register(name, email, password) {
        this.url = this._baseUrl + 'signup';
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({name, email, password})
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

    getUserMovies() {
        this.url = this._baseUrl + 'movies';
        return fetch(this.url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('jwt')}`,
            },
            credentials: 'include',
        }).then(res => this._getResponseData(res))
    }

    checkAuthorize() {
        this.url = this._baseUrl + 'users/me';
        return fetch(this.url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('jwt')}`,
            },
        }).then(res => this._getResponseData(res));
    }

    setUserData(data) {
        this.url = this._baseUrl + 'users/me';
        return fetch(this.url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('jwt')}`,
            },
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        }).then(res => this._getResponseData(res));
    }

    addMovie(movie) {
        this.url = this._baseUrl + 'movies';
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('jwt')}`,
            },
            credentials: 'include',
            body: JSON.stringify(movie)
        }).then(res => this._getResponseData(res));
    }

    deleteMovie(movieId) {
        this.url = this._baseUrl + 'movies/' + movieId;
        return fetch(this.url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('jwt')}`,
            },
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

export const mainApi = new MainApi(NODE_ENV === 'prod' ?
    'http://movies-api.vasiliymuravev.ru/' : 'http://movies.explorer.api/');
