import { LOGOUT, USERNAME } from "../actions/actionstype";

const initialState = {
    details: JSON.parse(localStorage.getItem("userDetails")) || []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USERNAME:
            return { ...state, details: action.payload };
        case LOGOUT:
            return { ...state, details: [] };
        default:
            return state;
    }
};