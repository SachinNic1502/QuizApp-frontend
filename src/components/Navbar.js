import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('logeduser')));
  const navigate=useNavigate();
  useEffect(() => {
    console.log(user);
    if (user) {
      localStorage.setItem('logeduser', JSON.stringify(user));
    } else {
      localStorage.removeItem('logeduser');
      localStorage.removeItem('auth');
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };
  return (
    <div className="bg-gray-100 p-8">
        <nav className="mb-4">
          {user? (
            <>
              <span className="mr-4">{user.email}</span>
              <button onClick={handleLogout} className="mr-4">Logout</button>
              <Link to="/quiz" className="ml-4 mr-4">Quiz</Link>
            </>
          ) : (
            <>
              <Link to="/register" className="mr-4">Register</Link>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/quiz" className="mr-4">Quiz</Link>
            </>
          )}
        </nav>
        </div>
  )
}

export default Navbar