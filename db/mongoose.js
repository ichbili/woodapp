var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
    process.env.MONGO_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost:27017/woodecommerce';   

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring,  { useNewUrlParser: true }, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});


//mongodb://<dbuser>:<dbpassword>@ds233531.mlab.com:33531/woodecommerce
