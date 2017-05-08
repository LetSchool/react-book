const initialState = {
    status: 'normal',
	title: null,
	content: null,
    updated: null,
    entries: []
}
const blog = (state = initialState, action) => {
    switch (action.type) {
        case 'BLOG_LIST':
            return Object.assign({}, state, {
                entries: action.entries
            });

        case 'BLOG_CREATE':
            var entries = state.entries

            if (action.status == 'success') {
                var newEntry = {
                    _id: action._id,
                    title: action.title,
                    content: action.content,
                    updated: action.updated
                }

                entries.unshift(newEntry)
            }

            return Object.assign({}, state, {
                entries: entries
            });

        default:
            return state
    }
}
export default blog
