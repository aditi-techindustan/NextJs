import React,{Component} from "react";
import App,{Container} from 'next/app';
import actions from '../actions';
import { connect } from "react-redux";
import { makeStore } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

const reducer = (state = { foo: '' }, action) => {
    switch (action.type) {
        case 'FOO':
            return { ...state, foo: action.payload };
        default:
            return state;
    }
};

const MyApp = ({Component, pageProps , store})=>{
    return(
        <Container>
            <Provider store={store}>
                    <Component {...pageProps}/>
            </Provider>
        </Container>
    )
}

MyApp.getInitialProps = async({ Component,ctx})=>{
        ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
}

// const mapStateToProps = state => {
//     return {
//       testInfo: state.test
//     };
//   };

export default withRedux(makeStore)(MyApp);
// export default connect(mapStateToProps)(MyApp)