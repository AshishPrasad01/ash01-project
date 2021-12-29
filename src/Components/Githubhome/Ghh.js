import React, { Component } from 'react'
import Gitsearch from '../Githubsearch/Gitsearch'
import Profile from '../GithubProfile/Profile'
import Userdetails from '../UserDetails/Userdetails'





 class Ghh extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <Profile />


               
                <div className="col-sm-3">
                <Userdetails />
                </div>
               
               
            </div>
            
        )
    }
}
export default Ghh