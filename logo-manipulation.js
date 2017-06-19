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
      .blur(5)
      .write(`${path}blur2.png`)

    image.clone()
      .blur(2)
      .write(`${path}blur3.png`)

    image.clone()
      .brightness(-0.8)
      .write(`${path}brightness.png`)

    image.clone()
      .brightness(+0.3)
      .write(`${path}brightness2.png`)

    image.clone()
      .crop(200, 100, 75, 75)
      .write(`${path}crop.png`)

    image.clone()
      .crop(300, 200, 75, 75)
      .write(`${path}crop2.png`)

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
      .mirror(false, true)
      .write(`${path}mirror2.png`)

    image.clone()
      .color([
       { apply: 'hue', params: [ -90 ] },
       { apply: 'lighten', params: [ 50 ] },
       { apply: 'xor', params: [ '#06D' ] }
        ])
      .write(`${path}color.png`)

    image.clone()
      .color([
       { apply: 'hue', params: [ +90 ] },
       { apply: 'lighten', params: [ 20 ] },
       { apply: 'xor', params: [ '#06D' ] }
        ])
      .write(`${path}color2.png`)


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


