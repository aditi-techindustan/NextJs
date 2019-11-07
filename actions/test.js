import types from '../types';
import store from '../store';

const {dispatch} = store;

export function testAction(payload){
    console.log(payload,"payload")
    dispatch({
        type:types.TEST_TYPE,
        payload
    })
}