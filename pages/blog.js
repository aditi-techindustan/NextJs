import React, { Component } from "react";

class Blog extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"red"}}>Hello, from Blog page</h1>
                <img src="/static/image.jpg" alt="my image" style={{height:'200px', width:'200px'}}/>
            </div>
        );
    }
}

export default Blog