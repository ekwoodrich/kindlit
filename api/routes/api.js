var express = require('express');
var router = express.Router();
const fs = require('fs');

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
router.post('/book/send', function(req, res, next) {
  console.log(req.body);
  let email = req.body.email;
  let text = req.body.text;
  console.log(email);

  console.log('got a book');
  let data = {
    from: 'noreply@kindlit.app',
    to: email,
    subject: text,
    html: text
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
