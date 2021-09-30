import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Menubar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Stack direction="horizontal" gap={3}>
                        <NavLink
                            style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: 'normal' }}
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                textDecoration: "none",
                                color: "white"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: 'normal' }}
                            to="/employee"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            Employee
                        </NavLink>

                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menubar;



