import React, {useState} from 'react'
import myReducer from "../Reducer/Storereducer"
// import { useState } from 'react'
import {useSelector} from "react-redux"
import serverAction from '../Action/ServerA'

 function Server() {

    const [state, setState] = useState("")
    const sendData =()=>{

serverAction(state)
    }

    const clientData = useSelector((storedata)=>{
        
        return storedata.myReducer.Client
    })
 




     // return storedata.myReducer.Client
    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-warningg"> 
                <h2>Server</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                    <input 
                      onChange={(e) => { setState(e.target.value) }}
                    className = "form-control" type="text" placeholder="Enter the details"></input>
                    </div>
                    <button 
                    onClick={sendData}
                    className="btn btn-primary mt-2 bg-warningg"> Click here</button>
                </div>
                <div className="card-footer bg-warningg">
                    <h2>Client Info: {clientData}</h2>
                </div>
            </div>
            
        </div>
    )
}
export default Server
