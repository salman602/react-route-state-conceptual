import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleEmployee = () => {
    const { id } = useParams()
    const [employeesDetails, setEmployeesDetails] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState({});

    useEffect(() => {
        fetch('/employeeDetails.json')
            .then(res => res.json())
            .then(data => setEmployeesDetails(data.employee))
    }, []);

    useEffect(() => {
        const foundEmployee = employeesDetails.find(employee => employee?.login?.id === id);
        setSingleEmployee(foundEmployee);
    }, [employeesDetails, id]);
    return (
        <Container className="my-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img-fluid" variant="top" src={singleEmployee?.picture?.thumbnail} />
                <Card.Body>
                    <Card.Title>Name: {singleEmployee?.name}</Card.Title>
                    <Card.Subtitle className="mb-2">Email: {singleEmployee?.email}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SingleEmployee;