import React, { Component } from 'react'
import Sidebar from './Sidebar'

import Dashboard from './Dashboard'
import PieChart from './PieChart'
import './App'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
export default class Home extends Component {
    render() {
        return (
            <>

                <Navbar />
                <div class="container-fluid" id="main">
                    <div class="row row-offcanvas row-offcanvas-left">
                        <Sidebar/>
                        <Dashboard/>

                    </div>
                    <Register/>
                    <Login/>
                </div>

            </>
        )
    }
}
