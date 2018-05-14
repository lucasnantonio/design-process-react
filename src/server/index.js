const express = require('express');
const Siteleaf = require('siteleaf');
const app = express();

var client = new Siteleaf({
  apiKey: "702f4d2fbbfdf2e9a340c2c633a10cbe",
  apiSecret: "0bf56b94133660ce305e729eb1f6c8fd"
});



function getData (req, res, next){
  client.request(`sites/5af63bfb6246c9483048fbfd/collections/articles/documents`, {
  }).then(function (posts) {
    res.locals.response = posts;
  })
  .then(() => next())
}


function filterData (req, res, next){
  const filteredResponse = res.locals.response
  .filter((item) =>
    item['categories'].some((category) => category == req.params.category))
    res.locals.response = filteredResponse;
  next();
  }



app.use(express.static('dist'));

app.get('/api/categories/:category', getData, filterData, (req, res) => res.send(res.locals.response));
app.listen(8080, () => console.log('Listening on port 8080!'));
