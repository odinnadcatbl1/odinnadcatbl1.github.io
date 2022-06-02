import React, {useEffect} from "react";
import './cat-list.css'
import { connect } from "react-redux";
import { fetchCats, catAddedToFavorite } from "../../actions";
import withCatService from '../hoc/with-cat-service';

const CatList = ({cats, onAddedToFavorite}) => {
    return (
        <div className="container">
            <div className="cat-list">
                {
                    cats.map((cat)=>{
                        return (
                            <div 
                                key={cat.id} 
                                className="cat"
                                onClick={onAddedToFavorite}>
                                <img src={cat.url} alt={'cat-'+cat.id}/>
                            </div>
                        );
                    })
                }              
            </div>
        </div>
    );
}

const CatListContainer = (props) => {

    useEffect(
        () => {props.fetchCats()}, []
    );
    
    const {cats, onAddedToFavorite} = props;

    return <CatList cats={cats} onAddedToFavorite={onAddedToFavorite}/>;
};

const mapStateToProps = ({cats}) => {
    return {cats};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {catService} = ownProps;
    return {
        fetchCats: dispatch(fetchCats(catService)()),
        onAddedToFavorite: () => {console.log(1)}
    }
};

//export default withCatService()(connect(mapStateToProps, mapDispatchToProps)(CatListContainer));
