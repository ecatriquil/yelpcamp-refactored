import React from 'react';
import Card from './Card';
const Cardgrid = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <Card />
            </div>
            <div className="col mb-4">
                <Card />
            </div>
            <div className="col mb-4">
                <Card />
            </div>
            <div className="col mb-4">
                <Card />
            </div>
        </div>
    );
};

export default Cardgrid;