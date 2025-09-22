import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetch data from your Flask backend
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-blue-500 text-white min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
  );
}

export default App;