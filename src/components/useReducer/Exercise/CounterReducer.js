export const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count - 1}

        case "RESET":
            return {count: 0}

        case "INCREMENT_BY_VAL":
            return {...state, count: state.count + action.payload}

            case "DECREMENT_BY_VAL":
                return {...state, count: state.count - action.payload}

        default:
            return state;
    }
}