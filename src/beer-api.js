/* eslint-disable */

import request from 'superagent';

const URL = 'https://frozen-reaches-38744.herokuapp.com';

export function getBeer() {
    return request.get(`${URL}/beers`);
}

