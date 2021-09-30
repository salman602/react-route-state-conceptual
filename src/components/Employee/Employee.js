import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employee = () => {
    const [employees, setEmployee] = useState([]);

    const [displayEmployees, setDisplayEmployees] = useState([]);

    useEffect(() => {
        fetch('./employeeData.json')
            .then(res => res.json())
            .then(data => {
                setEmployee(data);
                setDisplayEmployees(data)
            })
    }, []);
    const handleEmployeeSearch = (event) => {
        // console.log(event.target.value);
        const searchValue = event.target.value.toLowerCase();
        const matchedEmployee = employees.filter(employee => employee.name.toLowerCase().includes(searchValue));
        setDisplayEmployees(matchedEmployee);
    };
    return (
        <Container className="my-4">
            <Form className="d-flex w-50 mb-3">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleEmployeeSearch}
                />
            </Form>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Details</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        displayEmployees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee?.id}</td>
                                <td>{employee?.name}</td>
                                <td>{employee?.designation}</td>
                                <td><NavLink
                                    to={`/employee/${employee?.id}`}
                                    activeStyle={{
                                        color: 'whitesmoke',
                                        fontWeight: 'bold',
                                        textDecoration: 'none'
                                    }}

                                >Details</NavLink></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default Employee;