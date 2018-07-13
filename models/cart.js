var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  products: [String],
  numberOfProducts: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1
  },
  total: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1
  },
  submitedAt: {
      type: String,
      default: null
  }
});

var Cart = mongoose.model('Cart', schema);

module.exports = {Cart}
