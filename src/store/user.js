const initialState = {
    fullName: "Karan Naik"
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "fullNameChanged":
            return { ...state, fullName: action.payload };

        default:
            return state;
    }
}

// selectors
export const getName = ( state ) => state.user.fullName;