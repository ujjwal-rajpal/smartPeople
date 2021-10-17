import { User } from 'src/app/core/models/user';
import { Actions, CREATE_USER, DELETE_USER, GET_USER_LIST_SUCESS  } from '../action/user.actions';

const initialState = {
  data:{
        "id": 1,
        "name": {
          "firstName": "",
          "lastName": ""
        },
        "gender": "",
        "dob": "",
        "address": {
          "lineOne": "",
          "lineTwo": "",
          "city": "",
          "state": "",
          "landMark": "",
          "pincode": null
        },
        "email": "",
        "phone": null},
};

export function reducer(
    state = [initialState],
    action: Actions) {
    switch (action.type) {
        case CREATE_USER:
            return [...state, action.payload];
        case DELETE_USER:
            // return state.filter(({ id }) => id !== action.id);
            return
        case GET_USER_LIST_SUCESS: 
          return action.payload
        default:
            return state;
    }

    
}
