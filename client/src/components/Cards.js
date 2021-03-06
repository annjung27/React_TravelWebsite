import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img_1.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/img_2.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Luxury"
                    path="/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src="images/img_3.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/img_4.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Luxury"
                    path="/services"
                    />
                    <CardItem
                    src="images/img_5.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Luxury"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards