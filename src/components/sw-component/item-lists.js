import React from 'react';
import ItemList from '../item-list';
import { withData,
    withSwapiService,
    withChildFunction,
    compose } from '../hoc-helper';





const renderName =  ({name}) =>  <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>

const mapPersonMetodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetsMetodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipsMetodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList =  compose(
                          withSwapiService(mapPersonMetodToProps),
                          withData,
                          withChildFunction(renderName)
                        )(ItemList);


const PlanetList =  compose(
                            withSwapiService(mapPlanetsMetodToProps),
                            withData,
                            withChildFunction(renderName)
                        )(ItemList);


const StarshipList = compose(
                            withSwapiService(mapStarshipsMetodToProps),
                            withData,
                            withChildFunction(renderModelAndName)
                        )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};