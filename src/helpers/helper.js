

const getId = function (url) {
  let id = url.replace(/event/i, '')
  return id
}

  const getEventId = function (params) {
    let event_id = Number(params.id);
    return event_id
  }

module.exports.getId = getId;
module.exports.getEventId = getEventId;
