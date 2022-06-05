
const initialState = {
    cats: [

    ],
    isAlreadyLoaded: false,
    likedCats: []
}

const findCat = (state, catId) => {
    const cat = state.cats.find((cat) => cat.id === catId);
    return cat;
};

const deleteCat = (state, action) => {
    const cat = findCat(state, action.payload);
    const newData = state.likedCats.filter((data)=>{return data.id !== cat.id})
    return {
        ...state,
        likedCats: [
            ...newData
        ]
    }; 
};

const addCat = (state, action) => {
    const newItem = {
        id: findCat(state, action.payload).id,
        url: findCat(state, action.payload).url
    };

    if (state.likedCats.filter((data)=>data.id === newItem.id).length > 0) {
        
        return {
            ...state,
            likedCats: [
                state.likedCats.filter((data)=>{return data.id !== newItem.id})
            ]
        }
    }

    return {
        ...state,
        likedCats: [
            ...state.likedCats,
            newItem
        ]
    };
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                cats: action.payload,
                isAlreadyLoaded: true,
            };
        case 'ADD_TO_FAVORITE':
            return addCat(state, action);                       
        case 'DELETE_FROM_FAVORITE':
            return deleteCat(state, action);
        default:
            return state;
    }
};

export default reducer;