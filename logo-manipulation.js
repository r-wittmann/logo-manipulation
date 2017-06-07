var Jimp = require('jimp')
var fs = require('fs')

var manipulateLogos = (filename) => {
  Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
    image.resize(256, 256)
      .write(`manipulated_logos/${filename.split('.')[0]}/small.png`)
  })
}

var readFiles = (dirname) => {
  fs.readdir(dirname, (err, filenames) => {
    err && console.error(err)
    filenames.forEach((filename) => {
      manipulateLogos(filename)
    })
  })
}

readFiles('original_logos/')
