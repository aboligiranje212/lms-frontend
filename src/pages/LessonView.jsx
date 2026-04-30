import { useParams } from "react-router-dom";
import courses from "../data/courses";

function LessonView() {
  const { courseId, lessonId } = useParams();

  const course = courses.find(c => c.id === parseInt(courseId));
  const lesson = course?.lessons.find(l => l.id === parseInt(lessonId));

  if (!lesson) return <h2 className="text-center mt-5">Lesson not found</h2>;

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4 border-0">
        <h2>{lesson.title}</h2>
        <hr />
        <p>{lesson.content}</p>
      </div>
    </div>
  );
}

export default LessonView;