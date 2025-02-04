import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { viewRegisteredCourses } from "../../services/professorService";
import Loading from "./../../components/ui/Loading";
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const { data } = await viewRegisteredCourses();
      setCourses(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center gap-4 mb-4">
        {courses.map((course) => (
          <div
            key={course.CourseID}
            className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg "
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold">{course.CourseCode}</h3>
              <span className="px-2 py-1 text-xs text-primary bg-indigo-50 rounded-full">
                {course.course_registrations?.length > 0
                  ? `${course.course_registrations.length} students`
                  : "No students yet"}
              </span>
            </div>
            <hr className="mb-2 border-gray-300" />
            <p className="mb-3 font-medium text-gray-700 text-md">
              {course.CourseName}
            </p>
            <p className="text-sm text-gray-500">
              Created: {new Date(course.created_at).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              Last Updated: {new Date(course.updated_at).toLocaleDateString()}
            </p>
            <div className="flex gap-2">
              <Button variant={"default"}>View Quizzes</Button>

              <Button variant={"outline"}> View Materials</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
