

const getId = function (url) {
  let id = url.replace(/event/i, '')
  return id
}

module.exports.getId = getId;
