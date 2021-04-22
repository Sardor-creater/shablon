const SET_CATEGORY = "SET_CATEGORY";

const initialState = {
	isFetching: true,
	users:[]
};

export default function newReducer(state = initialState, action) {
	switch (action.type) {
		case SET_CATEGORY:
			return { ...state, users: action.payload };
		default:
			return state;
	}
}

export const setRepos = (repos) => ({ type: SET_CATEGORY, payload: repos });
