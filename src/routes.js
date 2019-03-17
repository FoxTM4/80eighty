import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AutoDetail from './components/AutoDetail'
import BundleItem from './components/BundleItems'
import Clearance from './components/Clearance'
import DecalsBanner from './components/DecalsBanners'
import Headwear from './components/Headwear'
import Mens from './components/Mens'
import Womens from './components/Womens'
import YouthInfant from './components/YouthInfant'
import Accessories from './components/Accessories'
import Login from './components/Login'
import Register from './components/Register'

export default(
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={AutoDetail} path='/auto'/>
        <Route component={BundleItem} path='/bundle'/>
        <Route component={Clearance} path='/clearance'/>
        <Route component={DecalsBanner} path='/decals'/>
        <Route component={Headwear} path='/headwear'/>
        <Route component={Mens} path='/mens'/>
        <Route component={Womens} path='/womens'/>
        <Route component={YouthInfant} path='/kids'/>
        <Route component={Accessories} path='/accessories'/>
        <Route component={Login} path='/login'/>
        <Route component={Register} path='/register'/>
        
    </Switch>
)