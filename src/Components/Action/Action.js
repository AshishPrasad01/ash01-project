
import myStore from "../ReduxStore/Store"
const myAction = (userData)=>{

    myStore.dispatch({
        type: "USER",
        payload: userData

    })
}

export default myAction
