import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = req.body;
    delete course._id;
    const result = await dao.createCourse(course);
    res.json(result);
  };
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  };
  const findCourseById = async (req, res) => {};
  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    const currentCourse = await dao.findCourseById(courseId);
    res.json(status);
  };
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:courseId", findCourseById);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
}
