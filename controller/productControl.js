var {Product} = require('../models/product');

var checkProduct = (req) => {
  var product = new Product({
    ref: req.body.ref,
    nameFr: req.body.namefr,
    nameEn: req.body.nameen,
    thickness: req.body.thickness,
    countries: req.body.countries,
    description: req.body.description,
    usages: req.body.usages,
    format: {
      larg: req.body.larg,
      long: req.body.long,
      sens: req.body.sens
    },
    price: req.body.price,
    inStock: true
  });
  if(product) return product; else return null;
}

var saveProducts = (products) => {
  Product.remove({}, function (err) {});
  products.map(product => {
      var pro = new Product(product);
      pro.save().then(() => { 
      console.log('save');
    }, (e) => { 
      console.log('error');
    });
  });
  return {saveProducts: 'OK'};
}

module.exports = {
  checkProduct,
  saveProducts
};
