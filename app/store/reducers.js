const initialState = {
    name: 'Richard'
}

const userProfile = (state = initialState, action) => {
    switch(action.type){
        case 'FIRSTNAME':
            return action.payload;
        default:
            return state;
    }
}

export { userProfile };