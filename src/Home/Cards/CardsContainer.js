import React from 'react'
import "./Card.scss"
import { ServiceCardDetails } from '../../JsonAarrays/CardsDetails';
import Card from './Card';

const CardsContainer = () => {
    return (

        <div className="cards-container anim-card">
            {ServiceCardDetails.map((obj, index) => {
                return <Card obj={obj} key={index} />;
            })}
        </div>
    )
}

export default CardsContainer