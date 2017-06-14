var Jimp = require('jimp')
var fs = require('fs')

var manipulateLogos = (filename) => {
  Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
    image.resize(256, 256)
      .write(`manipulated_logos/${filename.split('.')[0]}/small.png`) 
})
  Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.invert()
      .write(`manipulated_logos/${filename.split('.')[0]}/invert.png`)
  })

  Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.blur(10)
      .write(`manipulated_logos/${filename.split('.')[0]}/blur.png`)
  })
    Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.brightness(-0.8)
      .write(`manipulated_logos/${filename.split('.')[0]}/brightness.png`)
  })

    Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.crop(500,100,75,75)
      .write(`manipulated_logos/${filename.split('.')[0]}/crop.png`)
  })
    Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.rotate(30)
      .write(`manipulated_logos/${filename.split('.')[0]}/rotate.png`)
  })
    Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.opacity(0.5)
      .write(`manipulated_logos/${filename.split('.')[0]}/opacity.png`)
  })
    Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.rotate(50,'false')
      .write(`manipulated_logos/${filename.split('.')[0]}/resizefalse.png`)
  })

        Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.contrast(0.7)
      .write(`manipulated_logos/${filename.split('.')[0]}/contrast1.png`)
  })
    Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.contrast(-0.7)
    image.rotate(15)
      .write(`manipulated_logos/${filename.split('.')[0]}/contrast2.png`)
  })
    Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.resize(500,250)
      .write(`manipulated_logos/${filename.split('.')[0]}/resize.png`)
  })
        Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
  
    image.mirror(true, false)
      .write(`manipulated_logos/${filename.split('.')[0]}/mirror.png`)
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
