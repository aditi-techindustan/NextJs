import types from '../types';
import {initializeStore} from '../store';

const {dispatch} = initializeStore;

export function testAction(payload){
    console.log(payload,"payload")
    dispatch({
        type:types.TEST_TYPE,
        payload
    })
}