import { IAction } from "../../../models/IAction";
import IUser from "../../../models/iUser";

export interface IUserState {
    users: IUser[];
}

const initialState = {
    users: [],
};

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
    default:
        return state
    }
}
