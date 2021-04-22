const SET_COUNT = "SET_COUNT";

const initialState = {
	isFetching: true,
	count: 1,
};

export default function newReducer(state = initialState, action) {
	switch (action.type) {
		case SET_COUNT:
			return { ...state, count: action.payload };
		default:
			return state;
	}
}

export const setCount = (count) => ({ type: SET_COUNT, payload: count });
