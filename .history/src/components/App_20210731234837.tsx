import React from 'react';
import { Provider } from 'react-redux';
import { store} from '../state';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      Hi!
    </Provider>
  );
}

export default App;
