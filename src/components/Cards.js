import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-1.jpg').default}
                            text='Explore the charm of the capital city of Morocco'
                            label='Rabat'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/img-2.jpg').default}
                            text='Discover the old Medina of the red city of Morocco'
                            label='Marrakesh'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/img-3.jpg').default}
                            text='Explore the blue pearl of Chefchaouen: one of the most instagrammable places in
                            northern Morocco'
                            label='Chefchaouen'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-4.jpg').default}
                            text='Chill in the most beautiful fine sandy beach on the Moroccan Atlantic coast'
                            label='Agadir'
                            path='/services'
                        />
                        <CardItem
                            src={require('../images/img-5.jpg').default}
                            text='Lose yourself in the oldest and largest medina in North Africa'
                            label='Fes'
                            path='/products'
                        />
                        <CardItem
                            src={require('../images/img-6.jpg').default}
                            text='Ride through the Sahara Desert and discover the magic bay of Dakhla on the Moroccan
                            Atlantic coast, between sand dunes and waves.'
                            label=' Dakhla'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
