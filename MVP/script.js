const express = require("express");

const app = express();
app.use(express.json());

const courses = [
  {
    id: 1,
    name: "ADA",
    instructor: "Anshul",
    seats: 100
  },
  {
    id: 2,
    name: "DE",
    instructor: "Ritesh",
    seats: 120
  },
  {
    id: 3,
    name: "Maths",
    instructor: "Vishak ",
    seats: 100
  }
];


// GET all courses
app.get("/courses", (req, res) => {
  return res.status(200).json(courses);
});


// GET a course by ID
app.get("/courses/:id", (req, res) => {

  const courseId = Number(req.params.id);

  const course = courses.find(
    course => course.id === courseId
  );

  if (!course) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  return res.status(200).json(course);
});


// POST a new course
app.post("/courses", (req, res) => {

  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    instructor: req.body.instructor,
    seats: req.body.seats
  };

  courses.push(newCourse);

  return res.status(201).json(newCourse);
});


// DELETE a course
app.delete("/courses/:id", (req, res) => {

  const courseId = Number(req.params.id);

  const index = courses.findIndex(
    course => course.id === courseId
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  courses.splice(index, 1);

  return res.status(200).json({
    message: "Course deleted successfully"
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});