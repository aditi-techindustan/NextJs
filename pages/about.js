import React , { Component } from "react";
import Router from "next/router";

class about extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>Here is About page!</h2>
                <div>
                    Click <span onClick={()=>Router.push('/blog')} style={{cursor:'pointer',textDecoration:'underline'}}>here</span> to read more!
                </div>
            </React.Fragment>
        )
    }
}

export default about;