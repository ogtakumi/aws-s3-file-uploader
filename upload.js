// // upload ebooks
var Minio = require('minio')
const path = require('path');
const pdf = require('pdf-poppler');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const AWS = require('aws-sdk');

let pdfpath = 'E:\\1stAPP\\pdf2jpg\\ebooks\\ADULT BOOKDS\\'
let jpgpath = 'E:\\1stAPP\\pdf2jpg\\ebooks\\adultbookthumb\\'
let files = fs.readdirSync(pdfpath)
let thumbnails = fs.readdirSync(jpgpath)

// console.log(files)

AWS.config.update({
      accessKeyId: "minioadmin",
      secretAccessKey: "minioadmin",
      region: 'us-west-2'
    });

const s3 = new AWS.S3({
    endpoint: 'http://192.168.0.33:9000',
    s3ForcePathStyle: true, // needed with minio?
});



// upload ebooks PDF

for (i = 0; i < files.length; i++){
    
    let pdfcontent = fs.readFileSync(pdfpath + files[i])
    
    var params = {
        Bucket: "esikidz-demo",
        // Key: 'ebooks//child//thumbs'+files[i],
        Key: "ebooks/adult/files/"+files[i],
        // Body: pdfcontent,
        // Metadata: {
        //  "metadata1": "value1", 
        //  "metadata2": "value2"
        //  }
    }

    // s3.putObject(params, function(err, data) {
    //   if (err)
    //    console.log(err)
    //   else   
    //    console.log("Successfully uploaded PDF files to files folder");
    //  })
    
    s3.getObject(params, function(err, data) {
      if (err)
       console.log(err)
      else   
       console.log("Successful");
     }
)
}




// // upload thumbnails JPG

// for (n = 0; n < thumbnails.length; n++){
    
//     let jpgcontent = fs.readFileSync(jpgpath + thumbnails[n])
    
//     var params = {
//         Bucket: "esikidz-demo",
//         // Key: 'ebooks//child//thumbs'+files[i],
//         Key: "ebooks/adult/thumbs/"+thumbnails[n],
//         Body: jpgcontent,
//         Metadata: {
//          "metadata1": "value1", 
//          "metadata2": "value2"
//          }
//     }

//     s3.putObject(params, function(err, data) {
//       if (err)
//        console.log(err)
//       else   
//        console.log("Successfully uploaded JPG files to thumbs folder");
//      })
    
// }







