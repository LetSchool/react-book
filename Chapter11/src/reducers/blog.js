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
            return Object.assign({}, state, {
                title: action.title,
                content: action.content,
                updated: action.updated
            });

        default:
            return state
    }
}
export default blog
