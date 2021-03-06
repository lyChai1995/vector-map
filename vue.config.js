const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
   // 修改 src 为 examples
   pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  }
}
