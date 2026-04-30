import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;