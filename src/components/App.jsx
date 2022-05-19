import React from 'react';
import { Suspense, lazy } from 'react';

import { HashRouter as Router } from 'react-router-dom';

import Header from './Header';
import CustomRoutes from "../Routes";

// import './styles.less';

const App = () => (
    <>
        <Router>
            <Suspense fallback={<div></div>}>
                <div className="main-component-container">
                    <header>
                        <Header/>
                    </header>
                    <main>
                        <CustomRoutes/>
                    </main>
                </div>
            </Suspense>
        </Router>
    </>
);

export default App;
