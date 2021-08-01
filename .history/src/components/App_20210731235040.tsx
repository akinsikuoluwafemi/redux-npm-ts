import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';




function App() {
  return (
    <Provider store={store}>
      <h1>Search For a Package</h1>
      <RepositoriesList/>
    </Provider>
  );
}

export default App;
