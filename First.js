const { Module } = require("module");
const name = "yash";
function first(){
    console.log("first");
}
first();
module.exports.first = first;