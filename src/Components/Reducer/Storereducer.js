import info from "../../InitialInfo";

const myReducer = (state = info, action) => {

        switch (action.type) {
                case "USER":
                        state = {

                                ...state,
                                user: action.payload
                        }

                        break;
                case "CLIENT":
                        state = {
                                ...state,
                                Client: action.payload

                        }
                        break;
                case "SERVER":
                        state = {
                                ...state,
                                Server: action.payload

                        }
                        break;



                //  case "BIO":
                //         state={
                //                 ...state,
                //                 bio: action.payload

                //         }  
                //         break;             

        }
        return state
}

export default myReducer