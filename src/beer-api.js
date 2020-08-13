/* eslint-disable */

import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function getBeers() {
    return request.get(`${URL}/beers`);
}

export function getBeer(id) {
    return request.get(`${URL}/beers/${id}`);
}

export function createBeer(beerData) {
    return request.post(`${URL}/beers`, beerData);

}

