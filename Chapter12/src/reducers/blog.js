const initialState = {
    status: 'normal',
    entries: [],
    article: null
}

const blog = (state = initialState, action) => {
    switch (action.type) {
        case 'BLOG_GET':
            return Object.assign({}, state, {
                status: 'normal',
                article: action.article
            });

        case 'BLOG_LIST':
            return Object.assign({}, state, {
                status: 'normal',
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
                status: 'create success',
                entries: entries
            });

        case 'BLOG_DELETE':
            return Object.assign({}, state, {
                status: 'delete success',
            });

        default:
            return state
    }
}

export default blog
