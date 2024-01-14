export default class UsersServices{

    static URL_API= 'http://127.0.0.1:8800/api/users';
    static HEADERS = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    static insertUser(params) {
        const options = {
            method: 'POST',
            headers: this.HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(this.URL_API, options)
        .then(response => response.json())
        .catch(error => error);
    }
}