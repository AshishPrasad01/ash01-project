import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Navbarr extends Component {
    render() {

        return (
            <div>
            <div className="container-flex m-0 p-0">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-dark bg-dark">
                            <Link to = "https://www.pexels.com/photo/young-man-in-checkered-driver-hat-and-warm-scarf-9794899/" className = "navbar-brand">The Revolutionary</Link>
                            {/* <a  className="navbar-brand ">React Nav</a> */}
                            <form style = {{display:"flex"}}>
                            <ul className="nav styling">
                                <li className="nav-item"> <Link className=" nav-link text-white" to="/">Home</Link></li>
                                <li className="nav-item"> <Link className=" nav-link text-white" to="/gitsearch">Git</Link></li>
                                <li className="nav-item"> <Link className=" nav-link text-white" to="/">ndkwnd    </Link></li>
                                <li className="nav-item"> <Link className=" nav-link text-white" to="/Login">Login    </Link></li>
                                <li className="nav-item"> <Link className=" nav-link text-white" to="/reduxdata">ReduxData    </Link></li>
                            </ul>
                            </ form>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Navbarr