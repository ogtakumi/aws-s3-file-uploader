const path = require('path');
const pdf = require('pdf-poppler');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

let pdfpath = 'E:\\1stAPP\\pdf2jpg\\ebooks\\KIDS Story BOOKS\\'
let jpgpath = 'E:\\1stAPP\\pdf2jpg\\ebooks\\kidbookthumb\\'
let files = fs.readdirSync(pdfpath)
let thumbnails = fs.readdirSync(jpgpath)

for (i = 0; i < thumbnails.length; i++) { 
    fs.renameSync(jpgpath+thumbnails[i], jpgpath + thumbnails[i].slice(0,36) + '.jpg');
}