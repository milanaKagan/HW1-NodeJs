const path = require('path');
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(`The Files in ${__dirname} are ${files}!`);
let  fileSizeInBytes = 0;
let stat = null;
files.forEach(filename => {
     stats = fs.statSync(filename);
     fileSizeInBytes = fileSizeInBytes + stats.size;
    
});
console.log(`The Files size in bytes is ${fileSizeInBytes}!`);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Pls Enter File Name : ', filename => {
    readline.close();

    const fs = require('fs')
    const filePath = path.join(__dirname, filename);
    fs.access(filePath, fs.F_OK, (err) => {
        if (err) {
          console.log(`${filePath} Not Exists!`);
          return
        }
      
        console.log(`${filePath} Exists!`);
      })
  });
