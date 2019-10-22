const initialState = {
    info:{}
  }
  
  export default function(state = initialState, action){
    switch (action.type) {
      case 'TEST_TYPE':
        return {
          ...state,
         info:payload
        }
      default:
        return state
    }
  }