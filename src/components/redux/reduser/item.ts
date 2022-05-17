const defaultState = {
    countItems: 0
}
// const { type, payload } = action()
export const reduser = (state = defaultState, action: any) => {//3
    switch (action.type) {
        case 'item':
            return { ...state, countItems: action.payload }

        default:
            return state
    }
}