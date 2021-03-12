const path = require('path');
const pdf = require('pdf-poppler');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const resizeImg = require('resize-img');


let jpgpath = 'E:\\1stAPP\\pdf2jpg\\thumbnails\\'
let files = fs.readdirSync(jpgpath)
console.log(files)

for (n = 0; n < files.length; n++) {
  const resize = async () => {
    try {
      const image = await resizeImg(fs.readFileSync(jpgpath+files[n]), {
        width: 147,
        height: 206
      });
      fs.writeFileSync(jpgpath+files[n], image);
    
    } catch (error) {
      console.error(error)
    }
    
    }
    resize();
}


const resize = async () => {
    let img = await fs.readFile(jpgpath+files[n]);
    let buf = await resizeImg(img, {
        width: 250
    });
    await fs.writeFile('Human-Skeleton-250-resize-img.jpg', buf);
}