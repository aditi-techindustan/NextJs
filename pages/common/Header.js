import React,{Component} from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg" style={{ background: '#fff' }}>
                    <Navbar.Brand>Next.js</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/Contact" replace>
                            Contact
                        </Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button>Search</Button>
                    </Form> */}
                </Navbar>
                <style jsx>
                    {`
                        h1{
                        color: #fff;
                        text-align:center;
                        padding:5%
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
            </React.Fragment>
        )
    }
}

export default Header