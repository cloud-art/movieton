import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/AppContainer/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = initStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
