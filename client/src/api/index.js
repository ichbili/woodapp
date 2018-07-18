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
  
export const fetchProductById = async (ref) => {
    const product = {
        ref: '1',
      familyId: '1',
      nameFr: 'Ronce dacajou',
      nameEn: 'Mahogany',
      thickness: '0.7mm',
      countries: 'Côte dIvoire, Ghana, Cameroun, Angola, Guinée',
      description: 'Utilisation seulement en placage (meubles de style Chippendale, Louis XVI, Empire, Régence)',
      usages: 'Ebénesterie et marqueterie',
      format: {
        larg: '30cm',
        long: '42cm',
        sens: 'en longueur'
      },
      price: 7.9,
    };
    return new Promise(resolve => {
        resolve(product);
    });
    // const {body} = await request.get(
    //     `api/products/${id}`
    // );
    // return product;
}
  
export const fetchFamilies = async () => {
    const {body} = await request.get(
        'api/families'
    );
    return body;
}