var Jimp = require("jimp");

// open a file called "lenna.png"
Jimp.read("original_logos/dachser.jpg", function (err, dachser) {
    if (err) throw err;
    dachser.resize(256, 256)            // resize
         .quality(60)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("manipulated_logos/dachser/smallbw.jpg"); // save
});
