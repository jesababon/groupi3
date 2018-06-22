const db = require('../database/connection');

const Event = {};

Event.all = function(){
    return db.any("SELECT * FROM events;");
}

Event.find = id => {
    return db.one("SELECT * FROM events WHERE id =$<id>", { id: id});
};

module.exports = Event;