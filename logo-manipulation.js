var Jimp = require('jimp')
var fs = require('fs')

var manipulateLogos = (filename) => {
  Jimp.read(`original_logos/${filename}`, (err, image) => {
    err && console.error(err)
    image.resize(512, Jimp.AUTO)

    var path = `manipulated_logos/${filename.split('.')[0]}/`
/*
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
*/
    image.clone()
      .mirror(true, false)
      .write(`${path}mirror.png`)

    var skewed = image.clone()  
    skew(skewed);
    skewed.write(`${path}skew.png`);

    image.clone()
      .color([
       { apply: 'hue', params: [ -90 ] },
       { apply: 'lighten', params: [ 50 ] },
       { apply: 'xor', params: [ '#06D' ] }
        ])
      .write(`${path}color.png`)
/*
            var canvas = document.getElementById("canvas");
            var image = new Image();
            image.onload = function() {
                canvas.width = image.width;
                canvas.height = image.height;
                var ctx = canvas.getContext("2d");
                var p = new Perspective(ctx, image);
                p.draw([
                        [30, 30],
                        [image.width - 50, 50],
                        [image.width - 70, image.height - 30],
                        [10, image.height]
                ]);
            }
            image.src = "firefox.jpg";
*/

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

function skew(el) {
  var c,  // new canvas which will replace this img element
    ctx, // context of new canvas
    i,  // loop counter
    tmpCtx, // temp context for doing work
    h,  // height of the image / new canvas
    w,  // width of the image / new canvas
    dh,  // destination height (used in translation)
    dw,  // destination width (used in translation)
    dy,  // destination y
    leftTop,// left top corner position
    leftBot;// left bottom corner position

  // Get the height/width of the image
  h = el.height;
  w = el.width;
 
  // Create the canvas and context that will replace the image
  //c = $("<canvas height='" + h + "' width='" + w + "'><\/canvas>");
  c = document.createElement('canvas');
  c.height = h;
  c.width = w;
  ctx = c.getContext('2d');

  // Create a temporary work area
  tmpCtx = document.createElement('canvas').getContext('2d');

  // Draw the image on the temp work area
  for (i = 0; i < h; i++) {
    dw = Math.abs((w * (h - i) + w * i) / h);
    tmpCtx.drawImage(el,
      0, i, w, 1, // sx, sy, sw, sh
      0, i, dw, 1); // dx, dy, dw, dh
  }
 
  // Calculate the left corners to be 20% of the height
  leftTop = parseInt(h * .2, 10);
  leftBot = parseInt(h * .8, 10) - leftTop;
 
  ctx.save();
 
  // Draw the image on our real canvas
  for (i = 0; i < w; i++) {
    dy = (leftTop * (w - i)) / w;
    dh = (leftBot * (w - i) + h * i) / w;
    ctx.drawImage(tmpCtx.canvas,
      i, 0, 1, h,
      i, dy, 1, dh);
  }
 
  ctx.restore();
 
  // Replace the image with the canvas version
  el.parentNode.replaceChild(c, el);
  //$(el).replaceWith(c);
}
