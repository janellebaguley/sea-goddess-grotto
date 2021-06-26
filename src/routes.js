import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './component/Home/Home'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
// import Psychic from './component/Psychic/Psychic'
import Shop from './component/Shop/Shop'
import Events from './component/Events/Events'
import Meet from './component/Meet/Meet'
import FAQ from './component/FAQ/Faq'
import Documents from './component/Docs/Documents'
import Policies from './component/Policies/Policies'
import Gallery from './component/Gallery/Gallery'

export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/blog' component={Blog}/>
        <Route path= '/contact' component={Contact}/>
        {/* <Route path= '/psychic' component={Psychic}/> */}
        <Route path= '/MER-chandise' component={Shop}/>
        <Route path= '/performancesandevents' component={Events}/>
        <Route path= '/meetthemermaids' component={Meet}/>
        <Route path= '/faq' component={FAQ}/>
        <Route path= '/documents' component={Documents}/>
        <Route path= '/policies' component={Policies}/>
        <Route path= '/gallery' component={Gallery}/>
    </Switch>
)