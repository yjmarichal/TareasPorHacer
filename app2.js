const fs = require('fs');
let a = fs.readFile('./db/data.json', (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(data);

    // => [Error: EISDIR: illegal operation on a directory, read <directory>]

});