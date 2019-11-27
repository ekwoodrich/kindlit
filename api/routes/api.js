var express = require('express');
var router = express.Router();
var mailgun = require('mailgun-js')({
  apiKey: 'key-d8a4508087f315106efdb5e55508465a',
  domain: 'mg.kindlit.app'
});

router.get('/', function(req, res, next) {
  res.send('api');
});
router.get('/book/send', function(req, res, next) {
  res.send('book');
});
router.post('/book/send', function(req, res, next) {
  console.log(req.body);
  let req_json = JSON.parse(req.body);
  let email = req_json.email;

  console.log('got a book');
  let data = {
    //Specify email data
    from: 'noreply@kindlit.app',
    //The email to contact
    to: email,
    //Subject and text data
    subject: 'Hello from Mailgun',
    html: 'this is a test'
  };
  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function(err, body) {
    //If there is an error, render the error page
    if (err) {
      res.render('error', { error: err });
      console.log('got an error: ', err);
    }
    //Else we can greet    and leave
    else {
      //Here "submitted.jade" is the view file for this landing page
      //We pass the variable "email" from the url parameter in an object rendered by Jade
      res.render('submitted', { email: req.params.email });
      console.log(body);
    }
  });
});

module.exports = router;
