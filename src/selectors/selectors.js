import { createSelector } from "reselect";

export const userSelector = (state) => {
	return state.new.users;
};

export const userSuperSelector = createSelector(userSelector, (users) => {
	console.log("selector2");
	return users.filter((elem) => true);
});
