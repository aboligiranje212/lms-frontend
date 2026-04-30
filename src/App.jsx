import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import LessonView from "./pages/LessonView";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/course/:courseId/lesson/:lessonId" element={<LessonView />} />
      </Routes>
    </Router>
  );
}

export default App;