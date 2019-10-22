import React,{Component} from "react";
import App,{Container} from 'next/app';
import actions from '../actions';
import { connect } from "react-redux";

class Layout extends React.Component{
    render(){
        const {children} = this.props
        return <div className="layout">{children}</div>
    }
}

componentDidMount = () => {
  actions.testAction({
      firstName:'test',
      lastName:'testing'
  })
}


class MyApp extends Component{
    render(){
        console.log(this.props.testInfo,"testInfo")
        return(
            <Container>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
      testInfo: state.test
    };
  };

export default connect(mapStateToProps)(MyApp)