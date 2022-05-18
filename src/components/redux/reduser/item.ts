import { items } from './../actions/action';

const defaultState = {
    countItems: 0
}

export const reduser = (state = defaultState, action: any) => {//3
    switch (action.type) {
        case 'item':
            return { ...state, countItems: action.payload }

        default:
            return state
    }
}