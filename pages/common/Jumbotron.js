import React from "react";
import {Jumbotron, Button} from 'react-bootstrap';
import Router from "next/router";
import '../../styles.scss';

const handler = () =>{
    Router.push({
        pathname:'/features',
        query:{readMore:'abc'}
    })
}
const ReactJumbotron = () =>{
    return(
            <Jumbotron style={{background:'#000'}}>
                <h1 style={{padding:'10%', textAlign:'center',color:'#fff'}}>Hello, Next.js!</h1>
                <p style={{textAlign:'center',color:'#fff'}} className ="example">
                A React Framework.
                </p>
                <p style={{textAlign:'center'}}>
                    <Button variant="primary" onClick={handler}>Learn more</Button>
                </p>
            </Jumbotron>
        )
}

export default ReactJumbotron;