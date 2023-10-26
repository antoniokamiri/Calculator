import { ACTIONS } from "./App"

// eslint-disable-next-line react/prop-types
export function OperationButton({dispatch, operation}){
    return (
    <button 
    onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
        {operation}
    </button>)
}

