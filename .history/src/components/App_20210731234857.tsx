import React from 'react';
import { Provider } from 'react-redux';
import { store} from '../state';



function App() {
  return (
    <Provider store={store}>
      Hi!
    </Provider>
  );
}

export default App;
