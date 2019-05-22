import React from 'react';
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helper';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Genger'/>
            <Record field='eyeColor' label='Eye Color'/>
            <Record field='birthYear' label='Birth Year'/>
        </ItemDetails>
    )
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodToProps)(PersonDetails);