const bodyParser = require('body-parser');
const express = require('express');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Product} = require('./models/product');
var {Cart} = require('./models/cart');
var {Contact} = require('./models/contact');
var {Family} = require('./models/family');
var {checkProduct, saveProducts} = require('./controller/productControl');
var {saveFamilies} = require('./controller/familyControl');

console.log('Server started');
const port = process.env.PORT || 5000;
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// get an instance of the express Router
var router = express.Router();

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// test route to make sure everything is working
//(accessed at GET http://localhost:5000/api)
router.get('/', (req, res) => {
    console.log('entering');
    //res.json({ message: 'Server working fine!' });
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

router.get('/products', (req, res) => {
    console.log('getting products...');
    Product.find().then((doc) => {
      res.json(doc);
    }, (err) => {
      res.json({
        message: 'Getting Products: Error getting products',
        error: err
      });
    });
});
router.get('/families', (req, res) => {
  console.log('getting products...');
  Family.find().then((doc) => {
    res.json(doc);
  }, (err) => {
    res.json({
      message: 'Getting Products: Error getting products',
      error: err
    });
  });
});
router.get('/products/:id', (req, res) => {
  console.log('Getting product by id');
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.json({
      message: 'Object Id not Valid',
      error: true
    });
  }
  Product.findById(id).then((product) => {
    if (!product) return res.json({ message: 'Product not found' });
    else res.json({product});
  }).catch((err) => {
    res.json({
      message: 'Getting Product: Error getting the product',
      error: err
    });
  });
});

router.post('/config', (req, res) => {
  console.log('begin configuring');
  var products = req.body.products;
  var families = req.body.families;
  if( products.length == 0 || families.length == 0 ) {
    res.json({ message: 'Products or Families empty' });
  } 
  else {
    async function savingData() {
      var resultFam = await saveFamilies(families);
      var resultPro = await saveProducts(products);
      res.json({message: "From post config", resultFam, resultPro});
    }
    savingData();
  }
});

router.post('/product', (req, res) => {
    console.log('post products entering');
    var product = checkProduct(req);
    if(product) {
      product.save().then((doc) => {
        res.json({ message: `Posting Product: product with id ${doc.id}` });
      }, (err) => {
        res.json({
          message: 'Posting Product: Error saving product',
          error: err
        });
      });
    } else {
      res.json({ message: 'Posting Product: non-conform see schema' });
    }
});

router.post('/contact', (req, res) => {
    console.log('Post contact');
    var contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      text: req.body.text,
      submitedAt: new Date(Date.now()).toISOString()
    });
    contact.save().then((doc) => {
      res.json({ message: `Thank you for your contact ${doc.name}` });
    }, (err) => {
      res.json({
        message: 'Posting Product: Error saving contact',
        error: err
      });
    });
});

router.post('/cart', (req, res) => {
    console.log('Post cart');
    var cart = new Cart({
      products: req.body.products,
      numberOfProducts: req.body.qtt,
      total: req.body.total,
      submitedAt: new Date(Date.now()).toISOString()
    });
    cart.save().then((doc) => {
      res.json({
        message: `Thank you for checking out your cart`,
        date: doc.submitedAt,
        qtt: doc.numberOfProducts,
        total: doc.total,
      });
    }, (err) => {
      res.json({
        message: 'Posting Cart: Error saving cart',
        error: err
      });
    });
});



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));