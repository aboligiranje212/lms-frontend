import { useParams } from "react-router-dom";
import courses from "../data/courses";
import LessonList from "../components/LessonList";
import { useState } from "react";

function CourseDetails() {
  const { courseId } = useParams();
  const [showLessons, setShowLessons] = useState(true);

  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) return <h2 className="text-center mt-5">Course not found</h2>;

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4 border-0">
        <h2>{course.title}</h2>
        <p className="text-muted">Instructor: {course.instructor}</p>
        <p>{course.description}</p>

        <button
          className="btn btn-outline-primary mb-3"
          onClick={() => setShowLessons(!showLessons)}
        >
          {showLessons ? "Hide Lessons" : "Show Lessons"}
        </button>

        {showLessons && (
          <LessonList lessons={course.lessons} courseId={course.id} />
        )}
      </div>
    </div>
  );
}

export default CourseDetails;