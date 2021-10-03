import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './Home.css'

const Home = () => {

    const history = useHistory();

    const handleToSeeMeals = () => {
        history.push("/meals");
    };
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title text-black-50">Welcome to</h1>
                <h1 className="bg-dark text-light mb">Chef Cuisine</h1>
                <Button className="btn btn-warning" variant="warning" onClick={handleToSeeMeals}>
                    All Meals
                </Button>
            </div>
        </div>
    );
};

export default Home;