class MainApi {
    constructor(baseUrl) {
        this.headers = {
            'Content-Type': 'application/json'
        };
        this._baseUrl = baseUrl;
    }

    register(email, password) {
        this.url = this._baseUrl + '/signup';
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({email, password})
        }).then(res => this._getResponseData(res));
    }

    authorize(email, password) {
        this.url = this._baseUrl + '/signin';
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({email, password})
        }).then(res => this._getResponseData(res));
    }

    checkAuthorize(token) {
        this.url = this._baseUrl + '/users/me';
        return fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(res => this._getResponseData(res));
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}

export const mainApi = new MainApi('https://api.vasiliymuravev.nomorepartiesxyz.ru');
