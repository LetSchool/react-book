const initialState = {
    status: 'normal',
	user: null,
	title: null,
	content: null,
    time: null
}
const blog = (state = initialState, action) => {
    switch (action.type) {
        case 'BLOG_LIST':
            return Object.assign({}, state, {
            });

        case 'BLOG_CREATE':
            return Object.assign({}, state, {
            });

        default:
            return state
    }
}
export default blog
