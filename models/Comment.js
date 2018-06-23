const db = require('../database/connection');

const Comment = {};

Comment.create=(newComment) => {
  return db.one('INSERT into comments (content) VALUES ($<content>) RETURNING *', newComment);
}

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
