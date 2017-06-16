var Jimp = require('jimp')
var fs = require('fs')

var manipulateLogos = (filename) => {
  Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
    image.resize(512, Jimp.AUTO)

    var path = `manipulated_logos/${filename.split('.')[0]}/`

    image.clone()
      .resize(256, 256)
      .write(`${path}small.png`)

    image.clone()
      .invert()
      .write(`${path}invert.png`)

    image.clone()
      .blur(10)
      .write(`${path}blur.png`)

    image.clone()
      .brightness(-0.8)
      .write(`${path}brightness.png`)

    image.clone()
      .crop(200, 100, 75, 75)
      .write(`${path}crop.png`)

    image.clone()
      .rotate(30)
      .write(`${path}rotate.png`)

    image.clone()
      .opacity(0.5)
      .write(`${path}opacity.png`)

    image.clone()
      .rotate(50, 'false')
      .write(`${path}resizefalse.png`)

    image.clone()
      .contrast(0.7)
      .write(`${path}contrast1.png`)

    image.clone()
      .contrast(-0.7)
      .rotate(15)
      .write(`${path}contrast2.png`)

    image.clone()
      .resize(500, 250)
      .write(`${path}resize.png`)

    image.clone()
      .mirror(true, false)
      .write(`${path}mirror.png`)

    image.clone()
      .color([
       { apply: 'hue', params: [ -90 ] },
       { apply: 'lighten', params: [ 50 ] },
       { apply: 'xor', params: [ '#06D' ] }
        ])
      .write(`${path}color.png`)


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
