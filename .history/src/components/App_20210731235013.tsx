import React from 'react';
import { Provider } from 'react-redux';
import { store} from '../state';



function App() {
  return (
    <Provider store={store}>
      <h1></h1>
    </Provider>
  );
}

export default App;
