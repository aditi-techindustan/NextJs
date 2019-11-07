import React, { Component } from "react";
import { Header, ReactJumbotron, ReactCard } from './common'
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import actions from '../actions';

const Home = () =>{
    return(
        <React.Fragment>
            <Header />
            <ReactJumbotron />
            <Row>
                <ReactCard style={{marginLeft:10}} />
            </Row>
        </React.Fragment>
    )
}

// Home.getInitialProps = ({}) =>{
//     actions.testAction({name:"test",desc:"new test"})  
// }

export default Home;
// export default withRedux(Home);