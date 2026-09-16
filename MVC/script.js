//MVC - Model-View-Controller is a software design pattern that 
// separates an application into three interconnected components: 
// the Model, the View, and the Controller. 
// This separation helps manage complex applications by organizing code and responsibilities.

//First component is the Model, which represents the data and business logic of the application.
// It defines the structure of the data, handles data storage and retrieval,

//Second component is the View, which is responsible for presenting the data to the user.
// It defines how the data is displayed and provides a user interface for interaction.

//Third component is the Controller, which acts as an intermediary between the Model and the View.
// It receives user input from the View, processes it, and updates the Model accordingly. 
// The Controller also determines which View to display based on the application's state.


const express = require("express");
const controller = require("./controller/controller.course.js");


const app = express();
app.use(express.json());


// GET all courses
app.get("/courses", controller.getAllCourses);

// GET a course by ID
app.get("/courses/:id", controller.getCourseById);

// POST a new course
app.post("/courses", controller.createCourse);

// DELETE a course
app.delete("/courses/:id", controller.deleteCourse);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});