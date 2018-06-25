
Groupi3
By Jesica Ababon, Joel Stewart and Dan Hemerlein 

Technologies Used:

Groupi3 is a full CRUD React App built with an Express back-end.  Groupi3 uses a PSQL database.  Groupi3 uses bcrypt for user registration and validation upon logging in.  We made use of the Bandsintown API via a third party NPM package.  We did have to apply for an API key directly with Bandsintown.  

General Approach:

We wanted to challenge ourselves to build an app in which a majority of the information that the users interact with is drawn from an API.  All the music events in the app are pulled in from the Bandsintown API - users can search for an artist via the UI and then view a list of events for the artist they searched for.  Individual events can be viewed by selecting the Event Details link in the main Event Page.  Events are not stored in the database meaning the unique Bandsintown ID is passed into the URL so that individual event details may be viewed in a separate component.  After that, users can comment on event entries.  Comments can be updated and deleted.  If a user searches for an artist that has no upcoming events, a message will be displayed to that effect.      

Installation Instructions: 

Fork and clone this repo.  Open two separate terminal windows and cd into this folder in each.  Run npm install.  Run the schema and seed files using psql -f database/schema.sql and sql -f database/seed.sql.  In one terminal window, run npm start to begin the React front end.  In the second terminal window, run nodemon server.js to begin the Express back end.  Register an account and begin searching for and commenting on events! 

ERDs: 

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(20),
    password_digest VARCHAR(255)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT REFERENCES users(id),
    event_id INT REFERENCES events(id),
    content TEXT
);

User Stories: As a user, I want to log in to Groupi3 and search for live music events by artist.  As a user, I want to comment on live music event entries to share my thoughts.  

Wireframes: are contained in the wireframes directory of this repository.  
Unsolved Hurdles: Towards the end of the afternoon on Monday 6/25, our app started to run very slowly.  This could be because we moved our API key out of a config.js file and into an environment variable.  We also suspect that it could be Bandsintown slowing us down on their end.  As of this writing, we are not able to successfully deploy our app to Heroku.  Some lower level hurdles include: not allowing a user to register if the username they’ve selected is already being used, being able to search by artist and location and genre, witting more tests, and finally, increasing the aesthetic value of our app via CSS and better UX design.  