var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  ref: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
  },
  nameFr: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
  },
  familyId: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  nameEn: {
      type: String,
      default: null
  },
  thickness: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
  },
  countries: {
    type: String,
    default: null
  },
  description: {
      type: String,
      default: null
  },
  usages: {
    type: String,
    default: null
  },
  format: {
      larg: String,
      long: String,
      sens: String
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true
  }
});

var Product = mongoose.model('Product', schema);

module.exports = {Product}
