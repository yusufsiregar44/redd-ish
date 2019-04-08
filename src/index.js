import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import * as serviceWorker from './utils/serviceWorker';

const AppWithStore =  () => (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(<AppWithStore /> , document.getElementById('root'));
serviceWorker.register();
