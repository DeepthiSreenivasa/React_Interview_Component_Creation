##Step 1 - Create Context
##Step 2 - Create Reducer
##Step 3 - Create Provider
##Step 4 - Wrap the Provider
##Step 5 - Start using the context/dispatch the actions

//Step - 1 - Create reducer - it is just a normal arrow function which
//             accepts action,payload action has action.item

//Step - 2 - Create Context - Context Should be empty since you do not have any objects getting passed inside
//Step - 3 - i.create the provider , useReducer inside this provider something like const [state,dispatch] = useReducer("",initaislSat)
//           ii.Wrap the context.provider with {children} and pass to value prop 
//Step - 4 - Wrap the app with provider

//Step - 5 - Usage : const {dispatch} = useContext(LoggedInUserDetailsContext)
//dispatch({
//    type:"ADD_USER",
//    payload:user.name
//});
