import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer = (state,action) =>{
    if(action.type == 'INC')
        return state+1;
    return state;    
}
const store = createStore(reducer,0);
store.subscribe(()=>{
    console.log("store changed: " + store.getState());
    }
);
store.dispatch({ type:'INC', payload: 1 });

const App = () => (
  <h1>Holi :3</h1>
);

render(<App />, document.getElementById('root'));
