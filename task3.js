var fs = require("fs")

fs.writeFile('welcome.txt', 'Hello Node', function (err) {
    if (err) throw err;
  });

  fs.readFile('welcome.txt', (err, data)=> {
    if (err) throw err;
    console.log(data.toString())
  })