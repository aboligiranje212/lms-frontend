import courses from "../data/courses";
import CourseList from "../components/CourseList";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">Available Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default Home;