import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      {/* <Counter number={0} /> */}
      <hr></hr>
      <TodosContainer />
    </div>
  );
};

export default App;
