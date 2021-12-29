import React, { Component } from 'react'
import {connect} from "react-redux"



 class Profile extends Component {
    render() {
        return (
            <div className = "container mt-3">
                <div className = "row">
                    <div className = "col-sm-4">
                        <div className = "card">
                            <div className = "card-header bg-warning ">
                                { <img src = {Object.keys(this.props.storeData.myReducer.user).length>0 ? this.props.storeData.myReducer.user.avatar_url : "https://www.pexels.com/photo/young-man-in-checkered-driver-hat-and-warm-scarf-9794899/"  } width= "100%" height = "100%" /> }
                            </div>
                                <div className = "card-body bg-primary">
                                    <h5>
                                        NAME: {Object.keys(this.props.storeData.myReducer.user).length >0 ? this.props.storeData.myReducer.user.name : ""}
                                    </h5>
                                    <p>
                                        BIO:{Object.keys(this.props.storeData.myReducer.user).length >0 ? this.props.storeData.myReducer.user.bio : "" }
                                    </p>
                                    <a href= {Object.keys(this.props.storeData.myReducer.user).length >0 ? this.props.storeData.myReducer.user.html_url : "#" } target = "_blank"className = "btn-btn-warning btn-lg" > Profile</a>

                                </div>

                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}

export default connect ((storeData)=>{

    return {
        storeData: storeData
    }
})(Profile)
