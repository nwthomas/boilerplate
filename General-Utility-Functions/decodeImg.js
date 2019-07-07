const fs = require("fs");

function decodeImg(encodedImg, decodedName) {
  // Decode image buffer from hex
  const imgHexDecode = Buffer.from(encodedImg, "hex");

  // Create file from decoded image
  fs.writeFileSync(decodedName, imgHexDecode);

  // Return hex encoded image
  return imgHexDecode;
}

module.exports = decodeImg;
