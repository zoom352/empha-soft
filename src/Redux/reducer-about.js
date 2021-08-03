const SOMEONE_ADD = 'SOMEONE-ADD'

let initialstate = {
    something: [
        { someone: 'someone', id: 1 },
        {someone: 'several', id: 2}
    ]
}


const aboutReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SOMEONE_ADD:
            return {
                ...state,
                something: [...state.something]
            };
        default:
            return state;
    }
}

export const someoneAC = () => {
    return {type: SOMEONE_ADD}
}


export default aboutReducer;