import React from "react";
import { connect } from "react-redux";
import {catDeletedFromFavorite } from "../../actions";
import withCatService from '../hoc/with-cat-service';

const LoveCatList = (props) => {
    const {likedCats, onDeletedFromFavorite} = props;

    return (
        <div className="container">
            <div className="cat-list">
                {
                    likedCats.map((cat)=>{
                        return (
                            <div 
                                key={cat.id} 
                                className="cat"
                                onClick={() => onDeletedFromFavorite(cat.id)}>
                                <img src={cat.url} alt={'cat-'+cat.id}/>
                            </div>
                        );
                    })
                }              
            </div>
        </div>
    );

};

const mapStateToProps = ({likedCats, isAlreadyLoaded}) => {
    return {likedCats, isAlreadyLoaded};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletedFromFavorite: (id) => dispatch(catDeletedFromFavorite(id)),
    }
};


export default withCatService()(connect(mapStateToProps, mapDispatchToProps)(LoveCatList));
