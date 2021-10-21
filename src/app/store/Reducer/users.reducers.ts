import { User } from 'src/app/core/models/user';
import { Actions, CREATE_USER,  DELETE_USER_SUCCESS, GET_USER_LIST_SUCESS, GET_USER_SUCESS, NEW_USER_SUCESS, USER_EDIT_SUCESS, OPERATION  } from '../Action/user.actions';

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
        case GET_USER_LIST_SUCESS: 
          return {
            ...state,
            employeeList:action.payload
          }
          case GET_USER_SUCESS:
            return{
              ...state,
              singleEmployee:action.payload
            } 
            case DELETE_USER_SUCCESS:
              let empList = (state['employeeList'].filter((employee)=>{
                if(employee.id != action.id)return employee;
              }));
              return {
                ...state,
                employeeList : empList
              }
              case OPERATION:
               return{
                  ...state,
                  operation:action.op
                }
                case NEW_USER_SUCESS:
                state['employeeList'].unshift(action.user);
                let emp = state['employeeList'].slice(0,15);
               return{
                  ...state,
                  employeeList : emp
                }  
                case USER_EDIT_SUCESS:
                let newempList = state['employeeList'].map((element)=>{
                  if(element.id === action.user.id)return action.user
                  return element;
                })
               return{
                  ...state,
                  employeeList : newempList
                }  
        default:
            return state;
    }

    
}
