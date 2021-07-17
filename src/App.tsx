import './styles/styles.scss';

import React from 'react';
import Header from './components/header/header';
import StickyNavigation from './components/navigation/sticky-navigation';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <StickyNavigation />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
