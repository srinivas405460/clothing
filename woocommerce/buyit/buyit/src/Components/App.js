import React from 'react';
import Product from './Pages/Product';
import store from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store} >
          <Product />
      </Provider>
        
    </div>
  );
}

export default App;
