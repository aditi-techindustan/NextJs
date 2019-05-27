import React, { Component } from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown,Form, FormControl, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        const href = {
            pathname: "/about",
            query: { name: "next" }
        }
        // the path inside pages directory + query string

        const as = {
            pathname: "/about/next",
            hash: "title-1"
        }
        // the path that will be rendered in the browser URL bar.
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Next.js</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#blog">Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                {/* <Button variant="outline-success">Search</Button> */}
                            </Form>
                        </Navbar.Collapse>
                    </Navbar.Toggle>
                </Navbar>
                <h1>Hello, from Home page</h1>
                <Link scroll={false} href="/Contact" replace >
                    {/* replace works as history.replace */}
                    <a>Contact</a>
                </Link>
                <br />
                <Link href="/newContact?new=something" as="/newContact" >
                    <a>New Contact</a>
                </Link>
                <br />
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <br />
                <Link href={href} as={as}>
                    <a>About</a>
                </Link>
                <style jsx>
                    {`
                        h1{
                            color: green;
                            text-align:center;
                            padding:20px
                        }
                        div{
                            background: white
                        }
                        a{
                            font-size:20px;
                            color:black;
                            text-decoration:none
                        }
                    `}

                </style>
                <style global jsx>
                    {`
                            body{
                                background:white
                            }
                        `}
                </style>
            </div>
        )
    }
}

export default Home