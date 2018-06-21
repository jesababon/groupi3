-- DROP DATABASE groupi3db;
-- CREATE DATABASE groupi3db;

-- \c groupi3db

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(20),
    password_digest VARCHAR(255)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT REFERENCES users(id),
    content TEXT
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY NOT NULL,
    artist_id VARCHAR(255) REFERENCES artists(id),
    date VARCHAR (15),
    artist_name VARCHAR(255),
    venue VARCHAR(255),
    address VARCHAR(255),
    ticket_link VARCHAR(255)
);

CREATE TABLE artists (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    genre VARCHAR(255)
)