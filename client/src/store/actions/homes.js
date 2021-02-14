import { GET_HOMES } from './constants';

export const getHomes = () => async dispatch => {

    return await fetch('/api/homes')
        .then(res => res.json())
        .then(homes => {
            return dispatch({ type: GET_HOMES, payload: homes })
        }
        )

}
