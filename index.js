const { createArray, createPromises } = require('./utils')

function log(str, cb, limit = 20) {
  let arr = createArray(str,limit)
  let arrProm = createPromises(arr)
  Promise.all(arrProm).then(r => {
    cb(r.reduce((r,w) => {
      return r + w
    }))
  })
}

module.exports = {
  log
}