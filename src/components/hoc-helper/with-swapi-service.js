import React from 'react';
import { SwapiServiceConsumer } from "../swapi-service-context";


const withSwapiService = (mapMathodToProps) => (Wrapped) => {

    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMathodToProps(swapiService)
                        return (
                            <Wrapped {...props} {...serviceProps}/>
                            )
                    }
                }
            </SwapiServiceConsumer>
            )

    }
}

export default withSwapiService;