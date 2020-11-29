import * as types from '../actions/actionTypes';


function userReducer(state=[],action){
    switch(action.type){
        case types.LOAD_USERS_SUCCESS:
            return action.users.data;

        case types.ADD_USER_SUCCESS:
            return[
                ...state,
           { name:action.users.data.name,
            email:action.users.data.email
            }
            ];
            case types.DELETE_USER_SUCCESS:
                let newState=state.filter(function(user){
                    return user.id !==action.id;
                });
                return newState;
                default:
                return state;
    }
}

export default userReducer;