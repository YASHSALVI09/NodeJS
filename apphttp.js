const http = require("http");
const server1=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.write("Hello World")
        res.end();
    }
    if(req.url ==="/api"){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})
server1.listen(3000)
console.log("Server has started in port 3000")

//courses: name,id,description
//getallthecourses- 1 api
//dropdown list
//getthecoursebyid- 2 api
//get
//post
//postnewcourse- 3 api
//putcoursebyid- 4 api
//deletecoursebyid- 5 api

//localhost:3000/getallthecourses
//localhost:3000/getthecoursebyid/1
//localhost:3000/courses
//localhost:3000/courses/1 //get a specific course

//localhost:3000/courses
{
    "name": "geo"
    "description": "geography"
}
//localhost:3000/courses/1
{
    "name": "hist"
}
//localhost:3000/
