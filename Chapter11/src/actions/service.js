var config = require('../../config/default.js')

const getService = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'SERVICE_DATA',
            serviceName: config.service.name
        })
    }
}

export default {
    getService
}
