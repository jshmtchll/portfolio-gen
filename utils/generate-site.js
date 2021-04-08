const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an error, reject the Promise and send an error to the promis's `.catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure promise doesn't accendentially execute the resolve( function as well)
                return;
            }

            //if everything went well resolve the promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'file created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Style added'
        });
      });
    });
  };

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};