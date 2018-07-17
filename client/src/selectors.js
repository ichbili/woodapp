import * as R from 'ramda';

export const getProductById = (state, ref) => R.prop(ref, state.products);

export const getProducts = (state, ownProps) => {
  const activeFamilyId = getActiveFamilyId(ownProps);
  const applySearch = item => R.contains(
    state.productsPage.search.toLowerCase(),
    R.prop('nameFr', item).toLowerCase()
  );
  const applyFamily = item => R.equals(
    activeFamilyId,
    R.prop('familyId', item)
  );
  const products = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeFamilyId), R.filter(applyFamily)),
    R.map(ref => getProductById(state, ref))
  )(state.productsPage.refs);

  return products;
}

export const getRenderedProductsLength = state => R.length(state.productsPage.refs);

export const getTotalCartCount = state => R.length(state.cart);

export const getTotalCartPrice = state => {
  let total = R.compose(
    R.sum,  
    R.pluck('price'),
    R.map(ref => getProductById(state, ref))
    
  )(state.cart);
  const totalPrice = total.toFixed(2);
  return totalPrice;
}

export const getFamilies = state => R.values(state.families);

export const getActiveFamilyId = ownProps => ownProps.match.params.id;


// pathname:  {"match":{"path":"/families/:id","url":"/families/2","isExact":true,"params":{"id":"2"}},"location":{"pathname":"/families/2","search":"","hash":"","key":"2jq2b9"},"history":{"length":49,"action":"POP","location":{"pathname":"/families/2","search":"","hash":"","key":"2jq2b9"}}}


export const getCartProductsWithCount = state => {
  const productCount = id => R.compose(
    R.length,
    R.filter(cartId => R.equals(id, cartId))
  )(state.cart);
  const productWithCount = product => R.assoc('count', productCount(product.ref), product);

  const uniqueIds = R.uniq(state.basket);
  const products = R.compose(
    R.map(productWithCount),
    R.map(ref => getProductById(state, ref))
  )(uniqueIds);

  return products;
}
