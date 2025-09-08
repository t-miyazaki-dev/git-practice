const fs = require(`fs`);

fs.writeFile("example.text","テスト",() => {
    console.log("実行されました")})

