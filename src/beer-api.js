

import request from 'superagent';

const URL = 'https://frozen-reaches-38744.herokuapp.com';

export function getBeers() {
    return request.get(`${URL}/beers`);
}

export function getBeer(id) {
    return request.get(`${URL}/beers/${id}`);
}

export function createBeer(beerData) {
    return request.post(`${URL}/beers`, beerData);

}

