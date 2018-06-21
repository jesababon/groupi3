
const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const jsonParser = bodyParser.json();
const saltRounds = 10;

// Create a new Express application (web server)
const app = express();
app.use(jsonParser);

app.use(session({
  secret: '04iogrebb0349reioanavsar3i',
  resave: false,
  saveUninitialized: true
}));



// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

app.use('/static', express.static('build/static'));

// =================================
// WRITE ALL ROUTES ABOVE PRODUCTION 
// ==================================

console.log('hello world');

app.post("/register", (request, response) => {    
  console.log('register')
  const password = request.body.password; 
  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      const newUser = {
        username: request.body.username,
        password_digest: hash,
      };
      console.log(newUser);
      return User.create(newUser);
    })
    .then(user => {
      request.session.loggedIn = true;
      request.session.userId = user.id;
      response.json(user);
    });
});

app.post("/login", (request, response) => {
  User.findByUsername(request.body.username).then(user => {
    return bcrypt
      .compare(request.body.password, user.password_digest)
      .then(isPasswordCorrect => {
        if (isPasswordCorrect) {
          request.session.loggedIn = true;
          request.session.userId = user.id;
          return response.json(user);
        }
        response.redirect(301, "/");
        request.session.loggedIn = false;
        request.session.userId = null;
      });
  });
});













// =========================================================


// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Start the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});