import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './component/Home/Home'
// import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
// import Psychic from './component/Psychic/Psychic'
import Shop from './component/Shop/Shop'
import MyCalendar from './component/Events/MyCalendar'
import Meet from './component/Meet/Meet'
import FAQ from './component/FAQ/Faq'
import Documents from './component/Docs/Documents'
import Policies from './component/Policies/Policies'
import Gallery from './component/Gallery/Gallery'

export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        {/* <Route path= '/about' component={About}/> */}
        <Route path= '/blog' component={Blog}/>
        <Route path= '/contact' component={Contact}/>
        {/* <Route path= '/psychic' component={Psychic}/> */}
        <Route path= '/shop' component={Shop}/>
        <Route path= '/performancesandevents' component={MyCalendar}/>
        <Route path= '/meetthemermaids' component={Meet}/>
        <Route path= '/faq' component={FAQ}/>
        <Route path= '/documents' component={Documents}/>
        <Route path= '/policies' component={Policies}/>
        <Route path= '/gallery' component={Gallery}/>
    </Switch>
)