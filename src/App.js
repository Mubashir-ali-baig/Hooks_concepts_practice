import React from 'react';
import Counter from './components/classCounter';
import HookCounter from './components/hookCounter';
import HookCounterTwo from './components/hookCounter2';
import HookCounterThree from './components/hookCounter3';
import HookCounterFour from './components/hookCounter4'
import './App.css';


function App() {
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<HookCounter/>*/}
      {/*<HookCounterTwo/>*/}
      {/*<HookCounterThree/>*/}
      <HookCounterFour/>
      </div>
  );
}

export default App;
