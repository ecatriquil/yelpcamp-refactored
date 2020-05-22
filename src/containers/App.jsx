import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import PageLoading from '../components/PageLoading';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <PageLoading /> : (
        <div>
            <Navbar />
            <Carousel>
                <div className="carousel-item active">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Offer 1</h1>
                            <p className="lead"></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Offer 2</h1>
                            <p className="lead"></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Offer 3</h1>
                            <p className="lead"></p>
                        </div>
                    </div>
                </div>
            </Carousel>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    {initialState.campgrounds.map(campground => {
                        return (
                            <div key={campground.id} className="col mb-4">
                                <a className="text-decoration-none" href="/">
                                    <div className="card">
                                        <img src={campground.image} className="card-img-top carousel-item__img" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{campground.name}</h5>
                                            <p className="card-text">{campground.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
};

export default App;