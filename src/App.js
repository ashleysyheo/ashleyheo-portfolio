import React from 'react';
import { Route } from 'react-router-dom';
import Heading from './components/Heading';
import IndexSort from './components/IndexSort';
import CraigslistPage from './components/project_page/CraigslistPage';
import AnytimePage from './components/project_page/AnytimePage';
import FcBarcelonaPage from './components/project_page/FcBarcelonaPage';
import './App.scss';
import KoreanFilmPage from './components/project_page/KoreanFilmPage';
import DesignPage from './components/project_page/DesignPage';
import Information from './components/Information';
import CodersPage from './components/project_page/CodersPage';

const App = () => {
    return (
        <div>
            <Heading />
            <Route path='/' component={ IndexSort } exact={ true } />
            <Route path='/information' component={ Information } />
            <Route path='/craigslist-housing' component={ CraigslistPage } />
            <Route path='/coders' component={ CodersPage } />
            <Route path='/fc-barcelona' component={ FcBarcelonaPage } />
            <Route path='/korean-independent-film-screening' component={ KoreanFilmPage } />
            <Route path='/design-a-principle' component={ DesignPage } />
        </div>
    )
}

export default App;
