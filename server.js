
const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const jsonParser = bodyParser.json();
const saltRounds = 10;
const Event = require('./models/Event');
const Comment = require('./models/Comment');
const secret = require('./config.js');
const bandsintown = require('bandsintown')(secret.key);
const cookieParser = require('cookie-parser');
const helper = require('./src/helpers/helper')


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

// app.get('/events.json', (request,response) => {
//       Event.all()
//       .then(event => {
//       response.json(event);
//       });
// });

app.get('/comments.json', (request, response) => {
  Comment.all()
  .then(comments => {    
     
    console.log(comments);
       
    response.json(comments)
    });
  });

app.post('/api-events.json', (request, response) => {
  const search = {
    search: request.body.search,
  }
  bandsintown
    .getArtistEventList(search.search)
    .then(events => {
      console.log(events);
      response.json(events);
    });

});

app.get('/api-events.json', (request, response) => {
  bandsintown
    .getArtistEventList('Skrillex')
    .then(events => {
      console.log(events);
      response.json(events);
    });
});

app.get('/api-events/:id.json', (request, response) => {
  // const getEventId = function () {
  //   let event_id = Number(request.params.id);
  //   return event_id
  // }
 let params = request.params
 let id = helper.getEventId(params)
 console.log(id);
 
  bandsintown
    .getArtistEventList('Skrillex')
    .then(events => {
        event = events.filter(event => {
        return event.id === id
      })
      response.json(event);
      
    });
});

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