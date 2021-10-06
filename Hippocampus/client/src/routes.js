import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import SignUp from './pages/sign-up/SignUp'
import SignIn from './pages/sign-in/SignIn'
import Community from './pages/community/Community'
import Articles from './pages/articles/Articles'
import Contact from './pages/contact/Contact'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={SignIn} />
                <Route path='/registro' component={SignUp} />
                <Route path='/comunidade' component={Community} />
                <Route path='/contato' component={Contact} />
                <Route path='/artigos' component={Articles} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes