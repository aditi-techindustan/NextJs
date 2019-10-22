import types from '../types';
import store from '../store';
import { useDispatch } from 'react-redux';
import { withRedux } from '../lib/redux'

const {dispatch} = store;

export function testAction(payload){
    console.log(payload,"payload")
    dispatch({
        type:types.TEST_TYPE,
        payload
    })
}