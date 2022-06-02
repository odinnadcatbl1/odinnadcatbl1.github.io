
const initialState = {
    cats: [

    ],
    isAlreadyLoaded: false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            console.log('add_to_favorite');
        case 'FETCH_DATA':
            return {
                cats: action.payload,
                isAlreadyLoaded: true,
            };
        
        default:
            return state;
    }
};

export default reducer;