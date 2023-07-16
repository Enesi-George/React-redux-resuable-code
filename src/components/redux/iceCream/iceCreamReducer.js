import { BUY_ICECREAM } from "./iceCreamType"

const initialState = {
    numbOfIceCream : 20
}

const iceCreamReducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numbOfIceCream: state.numbOfIceCream - 1
        }
        default: return state
    }

}
export default iceCreamReducer;