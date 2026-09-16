function getAllCourses(req,res){
    return res.status(200).json(courses);
}

function getCourseById(req,res){
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
}

function createCourse(req,res){
    const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    instructor: req.body.instructor,
    seats: req.body.seats
  };

  courses.push(newCourse);

  return res.status(201).json(newCourse);
}

function deleteCourse(req,res){
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
}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    deleteCourse
}