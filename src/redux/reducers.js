
const initialState = {
    posts: [],
    isLoading: false
};

// https://jsonplaceholder.typicode.com/posts

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return {
                ...state,
                posts: action.payload
            };
        }
        case 'SET_IS_LOADING': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'RESET_IS_LOADING': {
            return {
                ...state,
                isLoading: false
            };
        }
        default:
            return state;
    }
};