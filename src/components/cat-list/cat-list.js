import React, {useEffect} from "react";
import './cat-list.css'
import { connect } from "react-redux";
import { fetchCats, catAddedToFavorite, catsLoaded } from "../../actions";
import withCatService from '../hoc/with-cat-service';

const CatList = (props) => {
    const {cats, isAlreadyLoaded} = props;
    useEffect(()=>{
        const {catService, catsLoaded} = props;
        if (!isAlreadyLoaded) {
            catService.getCats()
            .then((data)=>{
                catsLoaded(data);
            });
        }
    }, []);

    return (
        <div className="container">
            <div className="cat-list">
                {
                    cats.map((cat)=>{
                        return (
                            <div 
                                key={cat.id} 
                                className="cat"
                                onClick={()=>{console.log(cat.id)}}>
                                <img src={cat.url} alt={'cat-'+cat.id}/>
                            </div>
                        );
                    })
                }              
            </div>
        </div>
    );

};

const mapStateToProps = ({cats, isAlreadyLoaded}) => {
    return {cats, isAlreadyLoaded};
};

const mapDispatchToProps = {
    catsLoaded,
};


export default withCatService()(connect(mapStateToProps, mapDispatchToProps)(CatList));
