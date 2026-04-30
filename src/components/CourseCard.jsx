import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-lg border-0">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{course.title}</h5>
          <h6 className="text-muted mb-2">{course.instructor}</h6>
          <p className="card-text">{course.description}</p>

          <Link
            to={`/course/${course.id}`}
            className="btn btn-primary mt-auto"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;