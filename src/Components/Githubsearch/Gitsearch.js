import React, { Component } from 'react'
import Profile from '../GithubProfile/Profile'
import axios from "axios"
import myAction from '../Action/Action'
import Userdetails from '../UserDetails/Userdetails'

class Gitsearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: ""
        }
    }
    getUserInformation = (event) => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${this.state.user}`)
            .then((res) => {
                
                myAction(res.data)

            }, (error) => {
                alert("No details Found")
            })
        alert(this.state.user)

    }

    render() {
        return (
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col">
                        <card className="card">
                            <div className="card-header bg-warning">
                                <h3>Github Search</h3>
                                <div className="card-body bg-warning">
                                    <form style={{ display: "flex" }} onSubmit={this.getUserInformation}>
                                        <div className="form-group">
                                            <input
                                                onChange={(event) => {
                                                    this.setState({
                                                        user: event.target.value
                                                    })
                                                }}
                                             type="text" placeholder="Enter user name " />
                                        </div>
                                        <div>
                                            <input type="submit" value="Search" className="btn btn-primary mx-3" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </card>
                    </div>
                    <div className="container mt-3">
                      
                       <div className="card">
                           <div className="card-header">
                           <Profile />

                           </div>
                           <div className="card-body mt-3">
                               <Userdetails />
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gitsearch
