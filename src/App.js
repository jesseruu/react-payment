import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';


import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Counter from './components/Counter';
import Donate from './components/Donate';
import Thanks from './components/Thanks';

import './App.css';

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/thanks' element={<Thanks />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        )
    }
}

export default App;