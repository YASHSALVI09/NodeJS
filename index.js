const express = require("express");
const app = express();
const courses = [
  {
    id: 1,
    name: "javascript",
  },
  {
    id: 2,
    name: "react",
  },
  {
    id: 3,
    name: "FSD",
  },
];

// for (i=0;i<courses.len;i++)
// {
//     if(courses[i].id === courseId){
//         course = courses[i];
//     }
// }

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/courses", function (req, res) {
  res.send(courses);
});
app.get("/courses/:id", function (req, res) {
  let courseId = req.params.id;
  //array.find
  //array.push
  var course = courses.find((c) => c.id === parseInt(courseId));
  if(!course) {
    res.status(404).send("Course not found");
  } else res.send(course);
});

//post service
//localhost:3000/course
//body
//{"name":"Devops"}
app.post("/course",function(req,res){
    //course object
    var course={
        id:courses.length+1, 
        name: req.body.name
    }
    //push that object into the courses array
    courses.push(course);
    res.send(course);
});

//Use JOI module and validate the input
//Download joi from npmjs.com/package/joi

app.listen(3000);
console.log("running the server on port 3000");




