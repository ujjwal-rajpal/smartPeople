import { createSelector } from "@ngrx/store";
import { User } from "src/app/core/models/user";

export const USER_LIST_SELECTOR = createSelector( 
    (state ) => {return state}
)
export const USER_SELECTOR = createSelector( 
    (state ) => {return state}
)

export const OPERATION = createSelector(
    (state)=>{return state['Operation']}
)
