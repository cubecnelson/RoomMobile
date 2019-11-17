import { ActionTypes } from '.'

export const setLoading = (loading: boolean) => {

    return {
        type: ActionTypes.SET_LOADING,
        payload: {
            loading
        }
    }
}