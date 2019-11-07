import React, { Component } from "react";
import Home from './Home';
import dynamic from "next/dynamic";
import { connect } from 'react-redux';
import actions from '../actions'

class Index extends Component{
    static getInitialProps({ initializeStore,isServer,pathname,query}){
        actions.getPosts()
        return {custom : 'custom'}
    }
    render(){
        return(
            <div>
                <div>Prop from redux {this.props.foo}</div>
                <div>Prop from getInitialProps{this.props.custom}</div>
            </div>
        )
    }
}

export default connect(state => state)(Index)

// function IndexPage() {
//     return (
//         <div>
//             <Head>
//                 <title>Next Js App</title>
//                 <meta name="viewport" content="initial-scale=1.0, width=device-width"  />
//                 <link
//                     rel="stylesheet"
//                     href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//                     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//                     crossorigin="anonymous"
//                 />
//             </Head>
//             <Home />
//         </div>
//     )
// }

// export default IndexPage;