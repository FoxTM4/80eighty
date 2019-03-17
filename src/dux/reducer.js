const initialState = {
    admin: {},
    user: {}
  };
  const ADMIN_DATA = "ADMIN_DATA";
const USER_DATA = "USER_DATA";
  
  export function updateAdmin(adminObj) {
    return {
      type: ADMIN_DATA,
      payload: adminObj
    };
  }
  
  export function updateUser(userObj) {
    return {
      type: USER_DATA,
      payload: userObj
    };
  }
  

  
  //reducer function
  export default function reducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {

      case ADMIN_DATA:
        return { ...state, admin: payload };
  
      case USER_DATA:
        return { ...state, user: payload };
  
      default:
        return state;
    }
  }