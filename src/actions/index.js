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

const catDeletedFromFavorite = (catId) => {
    return {
        type: 'DELETE_FROM_FAVORITE',
        payload: catId
    };
};

const fetchCats = (catService, dispatch) => () => {
    catService.getCats()
        .then((data)=>{
            dispatch(catsLoaded(data));
        })
        .catch(()=>{console.log('ERROR IN fetchCats')})
}

export {catAddedToFavorite, fetchCats, catDeletedFromFavorite};