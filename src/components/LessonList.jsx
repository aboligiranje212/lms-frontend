import { Link } from "react-router-dom";

function LessonList({ lessons, courseId }) {
  return (
    <ul className="list-group">
      {lessons.map(lesson => (
        <li
          key={lesson.id}
          className="list-group-item d-flex justify-content-between"
        >
          {lesson.title}
          <Link
            to={`/course/${courseId}/lesson/${lesson.id}`}
            className="btn btn-sm btn-success"
          >
            Open
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LessonList;