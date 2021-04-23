import axios from "axios";
const instance = axios.create({
	baseURL: "https://api.github.com/",
});

export const getCategory = async () => {
	const res = await instance.get(`users`);
	return res;
};
