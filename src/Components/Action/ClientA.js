import mystore from "../ReduxStore/Store"

const clientAction = (data)=>{
    // alert (data)
    mystore.dispatch({
            type:  "CLIENT",
            payload: data

    })

}

export default clientAction