import React, { useEffect } from 'react';
import './App.css';
import { fetchCurrentBitcoinPrice } from 'api/coindesc/index';

const App = () => {
  useEffect(() => {
    fetchCurrentBitcoinPrice().then(res => console.log(res));
  }, []);

  return (
    <div className="App">
      ехала
    </div>
  );
};

export default App;
