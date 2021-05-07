import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './component/Home/Home'
import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import Psychic from './component/Psychic/Psychic'
import Shop from './component/Shop/Shop'

export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/blog' component={Blog}/>
        <Route path= '/contact' component={Contact}/>
        <Route path= '/psychic' component={Psychic}/>
        <Route path= '/shop' component={Shop}/>
    </Switch>
)