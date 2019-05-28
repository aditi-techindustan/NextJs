import React, { Component } from "react";
import { Header, ReactJumbotron, ReactCard } from './common'
import { Row } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ReactJumbotron />
                <Row>
                    <ReactCard style={{marginLeft:10}} />
                </Row>
            </React.Fragment>
        )
    }
}

export default Home;