import './styles/styles.scss';

import React from 'react';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
    </div>
  );
}

export default App;
