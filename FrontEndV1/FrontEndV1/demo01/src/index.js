import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CommonLauncher from "./commonLauncher";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BrowserRouter>
                <CommonLauncher/>
            </BrowserRouter>);
