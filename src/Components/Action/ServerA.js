import mystore from "../ReduxStore/Store"

const serverAction = (data)=>{
    // alert (data)
    mystore.dispatch({
            type:  "SERVER",
            payload: data

    })

}

export default serverAction