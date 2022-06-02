const catsLoaded = (cats) => {
    return {
        type: 'FETCH_DATA',
        payload: cats
    };
};

const catAddedToFavorite = (catId) => {
    return {
        type: 'ADD_TO_FAVORITE',
        payload: catId
    };
};

const fetchCats = (catService, dispatch) => async () => {
    await catService.getCats() 
        .then((data)=>{dispatch(catsLoaded(data))})
        .catch(console.log('in actions'))
};

export {catAddedToFavorite, fetchCats, catsLoaded};