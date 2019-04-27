const fs = require("fs");
const child_process = require("child_process");
const path = require("path");

module.exports = function loader(source) {
  const callback = this.async();

  const targetPath = path.relative(path.join(__dirname, "../../"), this.resourcePath);
  let dir = fs.readdirSync(path.dirname(targetPath));
  dir.forEach((pathInDir) => this.addDependency(path.join(path.dirname(targetPath), pathInDir)));

  child_process.exec(`${path.join(__dirname, "inklecate.exe")} ${targetPath}`, (err, stdout) => {
    if (err) {
      return callback(err);
    }
    fs.readFile(`${this.resourcePath}.json`, (err, data) => {
      if (err) {
        return callback(err);
      }
      fs.unlink(`${this.resourcePath}.json`, () => {});
      callback(null, `export default ${data}`);
    });
  });
};
