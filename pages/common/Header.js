import React,{Component} from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Router from "next/router";

class Header extends Component {

    handler = (path) =>{
        Router.push({
            pathname: `/${path}`
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg" style={{ background: '#fff' }}>
                    <Navbar.Brand>Next.js</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link onClick={()=>this.handler("Contact")}  replace>
                            Contact
                        </Nav.Link>
                        <Nav.Link onClick={()=>this.handler("about")} >About</Nav.Link>
                        <Nav.Link onClick={()=> this.handler("blog")} >Blog</Nav.Link>
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