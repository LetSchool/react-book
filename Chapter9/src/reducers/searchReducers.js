const SEARCH_TODO = 'SEARCH_TODO'

function search(state = '', action) {
  switch (action.type) {
    case SEARCH_TODO:
      return action.text

    default:
      return state
  }
}

export default search