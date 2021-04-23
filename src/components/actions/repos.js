import axios from "axios";
import { setRepos } from "../../reducers/newReducer";

export const getCat = () => {
	return async (dispatch) => {
		const response = await axios.get(`https://api.github.com/users`);
		dispatch(setRepos(response.data));
	};
};
