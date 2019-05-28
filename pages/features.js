import React,{Component} from "react";
import {ListGroup} from 'react-bootstrap';

class Features extends Component{
    render(){
        return(
            <React.Fragment>
                <ListGroup>
                    <ListGroup.Item>
                        New Post
                    </ListGroup.Item>
                    <ListGroup.Item>
                        feature 1
                    </ListGroup.Item>
                    <ListGroup.Item>
                        feature 2
                    </ListGroup.Item>
                </ListGroup>
            </React.Fragment>
        )
    }
}

export default Features