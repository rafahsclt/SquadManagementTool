import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NewTeam from '../pages/NewTeam'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Routes: React.FC = () => {
    return (
        <div style={{ overflowX: "hidden"}}>
            <Header />
                <BrowserRouter>
                    <Route path="/" component={Home} exact />
                    <Route path="/team" component={NewTeam} />
                </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Routes