const config = require('config')

const entryList = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/blog/list', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()

            if (res.status == 'success') {
                dispatch({
                    type: 'BLOG_LIST',
                    status: 'success',
                    entries: res.blog
                })
            }else {
                dispatch({
                    type: 'BLOG_LIST',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

const getArticle = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/blog/entry/' + conditions.id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()

            if (res.status == 'success') {
                dispatch({
                    type: 'BLOG_GET',
                    status: 'success',
                    article: res.blog
                })
            }else {
                dispatch({
                    type: 'BLOG_GET',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

const createEntry = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/blog/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: conditions.title || undefined,
                    content: conditions.content || undefined
                })
            })

            let res = await response.json()

            if (res.status == 'success') {
                dispatch({
                    type: 'BLOG_CREATE',
                    status: 'success',
                    _id: res.blog._id,
                    title: res.blog.title,
                    content: res.blog.content,
                    updated: res.blog.updated
                })
            }else {
                dispatch({
                    type: 'BLOG_CREATE',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

const deleteEntry = (conditions) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(config.service.external_url + '/api/blog/entry/' + conditions.id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json()

            if (res.status == 'success') {
                dispatch({
                    type: 'BLOG_DELETE',
                    status: 'success'
                })
            }else {
                dispatch({
                    type: 'BLOG_DELETE',
                    status: 'error'
                })
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

export default {
	entryList,
    createEntry,
    getArticle,
    deleteEntry
}
