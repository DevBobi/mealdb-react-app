import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    }, [searchText]);

    const handleSearch = (e) => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    };

    return (
        <>
            <div className="container">
                <h1 className="my-3">All Meals</h1>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Your Meal.."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={handleSearch}
                    />
                    <Button className="btn btn-outline-dark" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
            <Row xs={1} md={3} className="g-4 meals-container">
                {meals?.map((meal) => (
                    <Meal meal={meal} key={meal.key}></Meal>
                ))}
            </Row>
        </>
    );
};

export default Meals;