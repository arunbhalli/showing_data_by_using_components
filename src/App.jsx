import React from 'react';
import StateCard from './StateCard';
const App = () => {
  return (
    <div className='App'>
      <StateCard icon='👉' label='Points' number={3000} />
      <StateCard icon='⚡' label='Lightnings' number={6540} />
      <StateCard icon='🤙' label='Shakas' number={337010} />
      <StateCard icon='💎' label='Diamonds' number={98661} />
    </div>
  );
};

export default App;
