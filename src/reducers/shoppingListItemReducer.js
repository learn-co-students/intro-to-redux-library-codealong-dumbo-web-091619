export default function shoppingListItemReducer(
	state = {
	  boops: []
	},
	action
  ) {
	console.log(action);
	switch (action.type) {
	  case 'INCREASE_COUNT':
		console.log('Current state.boops length %s', state.boops.length);
		console.log('Updating state.boops length to %s', state.boops.length + 1);
		return {
		  ...state,
		  boops: state.boops.concat(state.boops.length + 1)
		};
  
	  default:
		console.log('Initial state.boops length: %s', state.boops.length);
		return state;
	}
  }