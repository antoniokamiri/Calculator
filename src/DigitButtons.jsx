import { ACTIONS } from "./App";

// eslint-disable-next-line react/prop-types
export default function DigitButton({dispatch, digit}){
    return (
    <button 
    onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
        {digit}
    </button>)
}
