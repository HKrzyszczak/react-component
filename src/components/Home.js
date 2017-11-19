import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {Grid, Col, Row} from 'react-bootstrap';

const Home = () => {

    const handleClick = () => {
        alert('Handle click');
    };

    return (
        <div>
            <Button
                bsStyle="primary"
                bsSize="large"
                onClick={handleClick}>Button
            </Button>
            <Grid>
                <Row>
                    <Col xs={12} md={8}>Column 1</Col>
                    <Col xs={6} md={4}>Column 2</Col>
                </Row>
            </Grid>
        </div>
    )
};

export default Home;