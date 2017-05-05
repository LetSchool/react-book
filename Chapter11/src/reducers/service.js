const initialState = {
	serviceName: null
}
const service = (state = initialState, action) => {
    switch (action.type) {
        case 'SERVICE_DATA':
            return Object.assign({}, state, {
                serviceName: action.serviceName
            });

        default:
            return state
    }
}
export default service
