import './App.css';

import React from "react"
import {Switch, Route} from 'react-router-dom'

// custom components
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <>
          <Header />
          <Switch>
            <Route exact path="/">
              <Photos />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </>
    )
}

export default App