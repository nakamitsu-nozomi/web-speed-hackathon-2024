const fs = require('fs');
const path = require('path');

const subsetFont = require('subset-font');

const font = fs.readFileSync(path.resolve(__dirname, './NotoSerifJP-Regular.otf'));
const alpahabets = '';

subsetFont(font, alpahabets, {
  targetFormat: 'woff2',
})
  .then((subsetBuffer) => {
    fs.createWriteStream(path.resolve(__dirname, './subset-Regular.woff2')).write(subsetBuffer);
  })
  .catch((e) => console.error(e));
