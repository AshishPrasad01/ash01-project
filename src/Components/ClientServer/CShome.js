import React from 'react'
import Client from './Client'
import Server from './Server'

function CShome() {
    return (
        <div className="container mt-5 bg-warning">
            <div className="card p-2">
                <div className="card-header bg-light text-center text-white bg-warning">
                    <h1 className="bg-dark  ">Client Server Communication</h1>
                    <div>
                    
                    <div className="row">
                        <div className="col-sm-6">
                            <Client />
                        </div>
                        <div className="col-sm-6">
                            <Server />
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default CShome
