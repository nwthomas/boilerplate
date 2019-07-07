const fs = require("fs");

function encodeImg(img) {
  // Read file buffer
  const imgReadBuffer = fs.readFileSync(img);

  // Encode image buffer to hex
  const imgHexEncode = Buffer.from(imgReadBuffer).toString("hex");

  // Return hex encoded image
  return imgHexEncode;
}

module.exports = encodeImg;
