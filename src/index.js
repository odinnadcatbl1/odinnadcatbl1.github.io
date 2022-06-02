import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import CatService from './services/cat-service';
import {CatServiceProvider} from './components/cat-service-context/cat-service-context'

import store from './store';

const catService = new CatService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CatServiceProvider value={catService}>
        <Router>
          <App/>
        </Router>
      </CatServiceProvider>
    </Provider>
  </React.StrictMode>
);



