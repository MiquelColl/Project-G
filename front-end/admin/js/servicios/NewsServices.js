export default class NewsServices{

    static URL_API= 'http://127.0.0.1:8800/api/news';
    static HEADERS = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    static insertNews(params) {
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

