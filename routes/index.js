var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
// mongoose.connect ('mongodb://mamunnyc:nitu143m@ds033337.mongolab.com:33337/myklovr');

var Schema = mongoose.Schema;

/* Signup form schema. */
var userDataSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String
}, 
facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
    username: String,
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },{collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

/* myklovr form schema. */
var myklovrDataSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  schooltitle: String,
  schoolname: String,
  companytitle: String,
  companyname: String
}, {collection: 'myklovr-data'});

var MyklovrData = mongoose.model('MyklovrData', myklovrDataSchema);

/* myklovr contact-form schema. */
var myklovrContactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String
}, {collection: 'contact-data'});

var myklovrContact = mongoose.model('myklovrContact', myklovrContactSchema);

/* routes. */
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('views/index.html');
// });

// router.get('/ambassador', function(req, res, next) {
//   res.render('views/index.html');
// });

// router.get('/business', function(req, res, next) {
//   res.render('views/index.html');
// });

// router.get('/schools', function(req, res, next) {
//   res.render('views/index.html');
// });

// router.get('/educators', function(req, res, next) {
//   res.render('views/index.html');
// });

// router.get('/insertcontact', function(req, res, next) {
//   res.render('views/index.html');
// });


/* user form insert. */
router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
  var item = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  };

  var data = new UserData(item);
  data.save();

  res.redirect('/');
});

/* user form update. */
router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();
  })
  res.redirect('/');
});

/* user form delete. */
router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
});


/* ambassador form insert. */
router.get('/get-data', function(req, res, next) {
  MyklovrData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insertambassador', function(req, res, next) {
  var item = {
    name: req.body.name,
    email: req.body.email,
    schoolname: req.body.schoolname
  };

  var data = new MyklovrData(item);
  data.save();

  res.redirect('/');
});

/* school form insert. */
router.get('/get-data', function(req, res, next) {
  MyklovrData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insertschool', function(req, res, next) {
  var item = {
    name: req.body.name,
    email: req.body.email,
    schooltitle: req.body.schooltitle,
    schoolname: req.body.schoolname
  };

  var data = new MyklovrData(item);
  data.save();

  res.redirect('/');
});

/* business form insert. */
router.get('/get-data', function(req, res, next) {
  MyklovrData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insertbusiness', function(req, res, next) {
  var item = {
    name: req.body.name,
    email: req.body.email,
    companytitle: req.body.companytitle,
    companyname: req.body.companyname
  };

  var data = new MyklovrData(item);
  data.save();

  res.redirect('/');
});


/* educator form insert. */
router.get('/get-data', function(req, res, next) {
  MyklovrData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/inserteducator', function(req, res, next) {
  var item = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    schoolname: req.body.schoolname
  };

  var data = new MyklovrData(item);
  data.save();

  res.redirect('/');
});

/* business form insert. */
router.get('/get-data', function(req, res, next) {
  myklovrContactData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insertcontact', function(req, res, next) {
  var item = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  };

  var data = new myklovrContactData(item);
  data.save();

  res.redirect('/');
});

module.exports = router;
