DROP DATABASE groupi3db;
CREATE DATABASE groupi3db;

\c groupi3db

DROP TABLE IF EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    userName VARCHAR(20),
    password_digest VARCHAR(255)
);

DROP TABLE IF EXISTS comments (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT REFERENCES users(id),
    content TEXT
);