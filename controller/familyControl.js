var {Family} = require('../models/family');

var saveFamilies = (families) => {
    Family.remove({}, function (err) {});
    families.map(family => {
        var fam = new Family(family);
        fam.save().then(() => { 
        console.log('save');
      }, (e) => { 
        console.log('error');
      });
    });
    return {saveFamilies: 'OK'};
}

module.exports = {
  saveFamilies
};
