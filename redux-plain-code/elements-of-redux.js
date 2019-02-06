
// people dropping off a form (action creators)
const createPolicy = (name, amount) => {
  return { // Action (a frorm in analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

// Reducers (departments), just along diagram 
// if first time reducer is called no data yet => empty array []
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // We care about this action (form)
    return [...oldListOfClaims, action.payload]
  }
  // we dont care about this action (form)
  return oldListOfClaims
}


const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    // rejects the name in payload.
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  return listOfPolicies
}

// fileter array helper
const numbers = [1, 2, 3]
// returns all numbers not 2
numbers.filter(numb => numb !== 2)
// 1,3


// Three action Creators and three Reducers. For Each type there is one.
// look the diagrams

const { createStore, combineReducers } = Redux

const ourDepartments = combineReducers({
  // names of the reducers
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})

const store = createStore(ourDepartments)

const action = createPolicy('Art, 20')

store.dispatch(action) // Or the shorter way
store.dispatch(createPolicy('Art', 20))
store.dispatch(createPolicy('Aks', 30))
store.dispatch(createPolicy('Riks', 40))

store.dispatch(createClaim('Aks', 120))
// shows the whole app state.
store.dispatch(deletPolicy('Riks'))
store.getState()

// Now the store is changing afrer each action.