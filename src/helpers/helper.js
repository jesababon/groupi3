
const sum = function (a,b) {
  return a+b
}


const getId = function (url) {
  let id = url.replace(/event/i, '')
  return id
}

const getEventId = function (params) {
  let event_id = Number(params.id);
  return event_id
}

const clearArray = function (array) {
  return array = [];
}

module.exports.sum = sum;
module.exports.getId = getId;
module.exports.getEventId = getEventId;
module.exports.clearArray = clearArray;

