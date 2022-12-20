const express = require("express");
const Joi = require("joi");
const { join } = require("path");
//const app = express();
//app.use(express.json());
const mongodb = require("mongoose");
const { string, date, boolean } = require("joi");
const { default: mongoose } = require("mongoose");
//step 1: Connecting to the database
//step 2: Create Schema
//step 3: Create a model
//step 4: I can add objects/documents
//step 5: I can find documents
//I/O operation: Java Scripts deal with I/O operations
//asynchronous Functions
// console.log("Hi")
// console.log("hello")
// result=async(fetch)
// console.log()

//step 1: Connecting to the database
mongodb.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test",
function(err){
    if (err){
        console.log("not able to connect to Mongo db")
    }
    else
    {
        console.log("Connection Successful");
    }
});

//step 2: Create Schema
//Schema is a class
    const courseSchema= new mongodb.Schema({
    name:String,
    author:String,
    tags:[String],
    ispublished:Boolean,
    Date:{type:Date,default:Date.now}
})
//Class and Object
//New Keyword

//step 3: Create a model
const Course = mongodb.model("course", courseSchema);
//Finding the course
Course.find(
    { author: "Sanjoy", name:"HTML" },//get specific detail by name
    { _id: 0, __v: 0 },//what parameters should be excluded
    { sort: { date: 1 }, limit:2 },//how many data we want, show only 2
    function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    }
  );

  //step 4: I can add objects/documents
  const newcourse=new Course({
    name:"CSS",
    author:"Yash",
    tags:["Frontend"],
    ispublished:false
  }
  )
  newcourse.save();
  

//Promises
//callback functions

//Assignment
//getcoursesbyauthor
//Getcoursesbyname
//courses
//post/course
//refer indexFile.js