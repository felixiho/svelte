import axios from 'axios'; 


export const getUserByUsername = async (userName:string) => {
	const response = await axios.get(
		`${import.meta.env.VITE_GITHUB_API_URL}/users/${userName}`
	);
	return response.data;
};
