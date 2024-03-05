// reducers/counterReducer.js
const initialState = {
  cart:0,
  student:[{name:"bandan",address:"bhatni bujurg",rollNo:1}]
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case "SET_DATA":
            return {...state,cart:state.cart + 1}

        case "ADD_CART":
            return {...state,cart:state.cart -1 }
     
        case "ADD_DATA":
            return {...state,student:[...state.student,action.studentData]}

        case "DELETE_ITEM":
            let deleteItem=state?.student?.filter((_,id)=>id!==action.index)
            return {...state,student:deleteItem}
        
        case "UP_DATA_NAME" :
            let tempArr=[...state.student];
            tempArr[action?.indexNo]=action?.studentDetails
            return {...state,student:tempArr}
      default :
      return state;
    }
};

export default userReducer;
