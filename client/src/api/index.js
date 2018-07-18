//import R from 'ramda';
import request from 'superagent';

export const fetchProducts = async () => {
    const {body} = await request.get(
      'api/products'
    );
    return body;
}
  
export const loadMoreProducts = async ({offset}) => {
    const {body} = await request.get(
        'api/products'
    );
    return body;
}
  
export const fetchFamilies = async () => {
    const {body} = await request.get(
        'api/families'
    );
    return body;
}