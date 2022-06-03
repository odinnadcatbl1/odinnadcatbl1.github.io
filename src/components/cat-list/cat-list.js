import React, {useEffect} from "react";
import './cat-list.css'
import { connect } from "react-redux";
import { fetchCats, catAddedToFavorite, catDeletedFromFavorite } from "../../actions";
import withCatService from '../hoc/with-cat-service';

const CatList = (props) => {
    const {cats, isAlreadyLoaded, onAddedToFavorite, likedCats, onDeletedFromFavorite} = props;
    useEffect(()=>{
        const {fetchCats} = props;
        if (!isAlreadyLoaded) {
            fetchCats();
        }
    }, []);


    return (
        <div className="container">
            <div className="cat-list">
                {
                    cats.map((cat)=>{
                        if (likedCats.filter((data) => data.id === cat.id).length > 0) {
                            return (
                                <div 
                                    key={cat.id} 
                                    className="cat liked-cat"
                                    onClick={() => onDeletedFromFavorite(cat.id)}>
                                    <img src={cat.url} alt={'cat-'+cat.id}/>
                                </div>
                            );
                        }
                        return (
                            <div 
                                key={cat.id} 
                                className="cat"
                                onClick={() => onAddedToFavorite(cat.id)}>
                                <img src={cat.url} alt={'cat-'+cat.id}/>
                            </div>
                        );
                    })
                }              
            </div>
        </div>
    );

};

const mapStateToProps = ({cats, isAlreadyLoaded, likedCats}) => {
    return {cats, isAlreadyLoaded,likedCats};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {catService} = ownProps;
    return {
        fetchCats: fetchCats(catService, dispatch),
        onAddedToFavorite: (id) => dispatch(catAddedToFavorite(id)),
        onDeletedFromFavorite: (id) => dispatch(catDeletedFromFavorite(id)),
    }
};


export default withCatService()(connect(mapStateToProps, mapDispatchToProps)(CatList));
