import { LOGOUT, USERNAME } from "./actionstype"

export const userNameData = (userData) => {
    return {
        type: USERNAME,
        payload: userData
    };
};
export const logoutUser = () => {
    return {
        type: LOGOUT,
    };
};