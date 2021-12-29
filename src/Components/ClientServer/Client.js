import React, { useState } from 'react'
import mystore from '../ReduxStore/Store'
import clientAction from '../Action/ClientA'
import {useSelector} from "react-redux"





function Client() {
    const serverData = useSelector((store)=>{

        return store.myReducer.Server
    })
    const [state, setState] = useState("")
    const sendData = () => {
        // alert(state)
        clientAction(state) 


    }


    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header bg-primary">
                    <h2>Client</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <input
                            onChange={(e) => { setState(e.target.value) }}
                            className="form-control" type="text" placeholder="Enter the details">
                        </input>
                    </div>
                    <button className="btn btn-primary mt-2 bg-primary"
                        onClick={sendData} > Click here</button>
                </div>
                <div className="card-footer bg-primary">
                    <h2>Server Info: {serverData}</h2>
                </div>
            </div>

        </div>
    )
}
export default Client
