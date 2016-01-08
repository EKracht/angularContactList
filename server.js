var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//   res.send('Hello world from server.js');
// });

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res) {
  console.log('I received a GET request');

  person1 = {
    name: 'Gillie',
    email: 'g@g.com',
    number: '111-1111'
  };

  person2 = {
    name: 'Ethan',
    email: 'e@e.com',
    number: '222-2222'
  };  

  person2 = {
    name: 'Mike',
    email: 'm@m.com',
    number: '333-3333'
  };  

  person2 = {
    name: 'Yuhua',
    email: 'y@y.com',
    number: '444-4444'
  };

  var contactList = { person1, person2, person3, person4 };  

  res.json(contactList);
});

app.listen(3000);
console.log('Server running on port 3000');