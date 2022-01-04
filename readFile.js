const { XMLParser,XMLValidator,XMLBuilder } = require('fast-xml-parser');
let express = require("express");

var fs = require('fs');
var chokidar = require('chokidar');
const path = require('path');
let app = express();
const pathh=path.join(__dirname, "xmlFiles")


console.log("path")
console.log(pathh)
var watcher = chokidar.watch(pathh, {ignored: /^\./, persistent: true});
watcher
  .on('add', function(path) {console.log('File', path, 'has been added');})
  .on('change', function(path) {console.log('File', path, 'has been changed');})
  .on('unlink', function(path) {console.log('File', path, 'has been removed');})
  .on('error', function(error) {console.error('Error happened', error);})

const options = {
    ignoreAttributes : false,
    attributeNamePrefix : "",
};



 fs.readFile('./test.xml', 'utf8', function(err, data) {
    const parser = new XMLParser(options);
    let jObj = parser.parse(data);

    let value="@_value"
    const application = jObj.CRD.Application;
    const time = jObj.CRD.Time;
    const number = jObj.CRD.Number;
    const dataa = {...application, ...time, ...number};
    // console.log(dataa)

});

app.listen(3000, ()=> console.log("started>>>>>>>>>>>>>>>>>>"));