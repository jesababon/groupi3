
const db = require('../database/connection');

const User = {};

User.findByUsername = username => {
  return db.one("SELECT * FROM users WHERE userName = $1", [username]);
}

User.create = newUserObj =>
  db.one(
    "INSERT INTO users (username, password_digest) VALUES ($1, $2) RETURNING *",
    [newUserObj.username, newUserObj.password_digest]
  );

module.exports = User;