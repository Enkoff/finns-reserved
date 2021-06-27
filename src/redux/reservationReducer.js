const initialState = {
    tableData: [],
    reservations: []
}

export const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'hello':
            
            break;
    
        default:
            return state;
    }
}