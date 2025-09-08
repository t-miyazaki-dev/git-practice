const fs = require(`fs`);

fs.readFile("example.text","utf8",(err,data) => {
    console.log(data);
})
