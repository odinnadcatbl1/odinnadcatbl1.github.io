import React from "react";
import { CatServiceConsumer } from "../cat-service-context/cat-service-context";

const withCatService = () => (Wrapped) => {

    return (props) => {
        return (
            <CatServiceConsumer>
                {
                    (catService) => {
                        return <Wrapped {...props} catService={catService} />
                    }
                }
            </CatServiceConsumer>
        );
    };

};  

export default withCatService;