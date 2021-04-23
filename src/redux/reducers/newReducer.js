import { getCategory } from "../../api/api";

const SET_CATEGORY = "SET_CATEGORY";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FILTER = "SET_FILTER";

const initialState = {
	isFetching: true,
	users: [],
	value: 1,
};

export default function newReducer(state = initialState, action) {
	switch (action.type) {
		case SET_CATEGORY:
			return { ...state, users: action.payload, isFetching: false };
		case SET_IS_FETCHING:
			return { ...state, isFetching: action.payload };
		case SET_FILTER:
			return { ...state, value: state.value + 1 };
		default:
			return state;
	}
}

export const setRepos = (repos) => ({ type: SET_CATEGORY, payload: repos });
export const setFilter = () => ({ type: SET_FILTER });
export const setIsFetching = (bool) => ({
	type: SET_IS_FETCHING,
	payload: bool,
});

export const getCat = () => {
	return async (dispatch) => {
		dispatch(setIsFetching(true));

		const response = await getCategory();
		dispatch(setRepos(response.data));
	};
};
