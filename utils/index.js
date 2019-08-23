const art = require('ascii-art')

const createArray = (str, limit) => {
  let arr = []
  let charc = 0
  let tmpStr = ''
  str.split(' ').map(word => {
    if (word.length + charc <= limit) {
      charc += word.length 
      tmpStr += '   '+word
    } else {
      arr.push(tmpStr === '' ? word : tmpStr)
      charc = 0
      tmpStr = ''
    }
  })
  arr.push(tmpStr)
  return arr
}

const createPromises = (arr) => {
  let arrProm = []
  arr.forEach(e => {
    arrProm.push(new Promise((res) => {
      art.font(e, 'Doom', function(rendered) {
        res(rendered)
      })
    }))  
  })
  return arrProm
}

module.exports = {
  createArray,
  createPromises
}