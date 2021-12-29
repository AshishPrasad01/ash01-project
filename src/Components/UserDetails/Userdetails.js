import React, { Component } from 'react'
import {connect} from "react-redux"

class Userdetails extends Component {

constructor(props) {
    super(props)


}
    render() {
        return (
            <div className ="container mt-3">
                <div className="card">
                    <div className="card-header bg-primary">
                        <h2>User Details:    
                        </h2>
                             <div className="card-body bg-warning">
                                 <ul className ="list-group">
                                 <li className ="list-group-item">ID:  {Object.keys(this.props.storeData.myReducer.user).length >0 ? this.props.storeData.myReducer.user.id : ""}</li>
                                    <li className ="list-group-item">Name:  {Object.keys(this.props.storeData.myReducer.user).length >0 ? this.props.storeData.myReducer.user.name : ""}</li>
                                    <li className ="list-group-item">Location:  {Object.keys(this.props.storeData.myReducer.user).length >0 ? this.props.storeData.myReducer.user.location : ""}</li>
                                    <li className ="list-group-item">Login:  {Object.keys(this.props.storeData.myReducer.user).length >0 ? this.props.storeData.myReducer.user.login : ""}</li>

                               
                                 </ul>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default  connect((storeData)=>{

return {

    storeData: storeData
}

})(Userdetails)
