import {GET_HOMES} from '../actions/constants'

const initialState = {
    homes: null
}

const homesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_HOMES:
        return {
            ...state,
            homes: payload
        }
      default:
        return state
    }
}

export default homesReducer;