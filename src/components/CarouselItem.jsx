import React from 'react';
import PropTypes from 'prop-types';
// import Jumbotron from './Jumbotron';

const CarouselItem = ({ title, description }) => {
    return (
        <div className="carousel-item active">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{title}</h1>
                    <p className="lead">{description}</p>
                </div>
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default CarouselItem;