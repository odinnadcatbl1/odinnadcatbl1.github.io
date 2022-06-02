import React from "react";

const {
    Provider: CatServiceProvider,
    Consumer: CatServiceConsumer
} = React.createContext();

export {
    CatServiceConsumer,
    CatServiceProvider
};