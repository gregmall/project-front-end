

import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://frozen-reaches-38744.herokuapp.com';

export function getBeers() {
    return request.get(`${URL}/beers`);
}


export function getBeer(id) {
    return request.get(`${URL}/beers/${id}`);
}

export function createBeer(beerData) {
    return request.post(`${URL}/beers`, beerData);

}

export function getCategory() {
    try{
    return request.get(`${URL}/category`);
    
    } catch (e) {
        return { error: e.message }
    }
}

export function deleteBeer(id) {
   console.log(id);
    return request.delete(`${URL}/beers/${id}`);
  
        
    
}

export function updateBeer(id, updatedBeer) {
    
     return request.put(`${URL}beers/${id}`, updatedBeer);
    
}