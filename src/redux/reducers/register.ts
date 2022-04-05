const value: any = localStorage.getItem("register")
let initialState: any = {}
if (typeof value === 'string') {
  initialState = JSON.parse(value) // ok
}

function RegisterReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'REGISTER':
      return action.payload
    case 'GET_TOKEN':
      return action.payload
    default:
      return state
  }
}

export default RegisterReducer