import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Meal.css'

const Meal = (props) => {
    const {
        strMealThumb,
        strMeal,
        strCategory,
        strInstructions,
        strIngredient1,
        idMeal
    } = props.meal;

    const history = useHistory();

    const handleMealClick = () => {

        history.push(`/meals/meal/${idMeal}`);
    };
    return (
        <div>
            <Col>
                <Card className="meal">
                    <Card.Img variant="top" src={strMealThumb} className="meal-img" />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>{strCategory}</Card.Text>
                        <Card.Text>{strIngredient1}</Card.Text>
                        <Card.Text>{strInstructions.slice(0, 250)}</Card.Text>
                    </Card.Body>
                    <Button className="btn btn-warning" onClick={handleMealClick}>
                        View details
                    </Button>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;