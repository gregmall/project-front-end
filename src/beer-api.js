

import request from 'superagent';

const URL = 'http://localhost:3001';

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
    
    return request.get(`${URL}/category`);
    

}

export function deleteBeer(id) {
   console.log(id);
    return request.delete(`${URL}/beers/${id}`);
  
        
    
}

export function updateBeer(id, updatedBeer) {
    
     return request.put(`${URL}/beers/${id}`, updatedBeer);
    
}