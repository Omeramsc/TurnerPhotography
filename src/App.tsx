import React from 'react';
import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import './App.css';
import { ConcertLanding } from './components/ConcertLanding';
import { CosplayLanding } from "./components/CosplayLanding";


const App: React.FC = () =>
    (
        <div className={`App`}>
            <Routes >
                    <Route path="/" element={<CosplayLanding/>}/>
                    <Route
                        path="/concert"
                        element={<ConcertLanding/>}
                    />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
        </div>
        
    );

export default App;
