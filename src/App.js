import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-8">
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;