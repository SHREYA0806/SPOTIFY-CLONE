export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQAmYDTtOfMt4xY53ZKKLwvjAdzhv0cHhHhCHYje7ll1Zu9QQlBZJasEtEDvv1Xv1Rpj9qq1M6Sej2kwUkbrrZQtNPLqU4uPDWQOLzv-skoQlYEtCOMP7ieznHR8vIctlaXxQ0GlfNXzwwC7A-mtNeEGeMrR9kh_34a1t2YPVCibp1EA",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                };
        default: 
            return state;
    }
}

export default reducer;