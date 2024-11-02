import React from 'react';
import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import {AboutSection} from './components/AboutSection';
import {ContactSection} from './components/ContactSection';
import {HeroSection} from './components/HeroSection';
import {PortfolioSection} from './components/PortfolioSection';

import './App.css';

const App: React.FC = () =>

    (
        <Router basename="/">
            <div className="App">
                <Routes >
                    <Route path="/" element={<HeroSection/>}/>
                    <Route path="/about" element={<AboutSection/>}/>
                    <Route path="/contact" element={<ContactSection/>}/>
                    <Route
                        path="/portfolio"
                        element={<PortfolioSection/>}
                    />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>

            </div>
        </Router>
    )

export default App;