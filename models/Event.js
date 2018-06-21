const db = require('../database/connection');

const Event = {};

Event.all = function(){
    return db.any("SELECT * FROM events;");
}

module.exports = Event;