export default function concertoReducer(state = [] , action) {
  switch(action.type) {
    case 'CREATE_CONCERTO':
      return [...state,
        Object.assign({}, action.concerto)
      ];

    default:
      return state;
  }
}
