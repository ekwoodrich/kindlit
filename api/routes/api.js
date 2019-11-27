var express = require('express');
var router = express.Router();
const uuidv1 = require('uuid/v1');
const fs = require('fs');
var multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

const readChunk = require('read-chunk');
const fileType = require('file-type');

let secrets = JSON.parse(fs.readFileSync('./secrets.json'));
console.log(secrets);

var mailgun = require('mailgun-js')({
  apiKey: secrets.mailgun_api,
  domain: secrets.mailgun_domain
});

router.get('/', function(req, res, next) {
  res.send('api');
});
router.get('/book/send', function(req, res, next) {
  res.send('book');
});
router.post('/book/send', upload.single('book'), function(req, res, next) {
  let email = req.body.email;
  let text = req.body.text;
  console.log(email);
  console.log(req.file.path);
  console.log('got a book');

  const buffer = readChunk.sync(req.file.path, 0, fileType.minimumBytes);
  console.log(fileType(buffer));
  let data = {
    from: 'noreply@kindlit.app',
    to: email,
    subject: text,
    html: text,
    attachment: req.file.path
  };
  mailgun.messages().send(data, function(err, body) {
    if (err) {
      res.send(JSON.stringify({ result: 'error', error: { error: err } }));

      console.log('error: ', err);
    } else {
      res.send(JSON.stringify({ result: 'success' }));
      console.log(body);
    }
  });
});

module.exports = router;
