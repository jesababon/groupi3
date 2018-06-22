const db = require('../database/connection');

const Comment = {};

Comment.all = function () {
  return db.any("SELECT * FROM comments;");
}

Comment.getUsername = function(){
  return db.any("SELECT * FROM users JOIN comments ON users.id=comments.user_id;", username);
}

Comment.find = id => {
  return db.one("SELECT * FROM comments WHERE id =$<id>", {
    id: id
  });
};

module.exports = Comment;
