import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [category, setCategory] = useState('general'); // 👈 active category

  return (
    <div>
      <NavBar setCategory={setCategory} /> {/* Pass setCategory to NavBar */}
      <LoadingBar height={3} color="#f11946" progress={progress} />

      <News
        setProgress={setProgress}
        apiKey={apiKey}
        key={category} // 👈 forces reload when category changes
        pageSize={pageSize}
        country="us"
        category={category}
      />
    </div>
  );
};

export default App;
