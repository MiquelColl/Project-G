export default class ReviewService {

    static URL_API= 'http://127.0.0.1:8800/api/reviews';
    static HEADERS = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    static getReviewsList() {
        
        return fetch(this.URL_API)
        
            .then(res => res.json())
            .catch(error => error);
    }

    static insertReview(params) {
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