-- DROP DATABASE groupi3db;
-- CREATE DATABASE groupi3db;

-- \c groupi3db

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    userName VARCHAR(20),
    password_digest VARCHAR(255)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT REFERENCES users(id),
    content TEXT
);