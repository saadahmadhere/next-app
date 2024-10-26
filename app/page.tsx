import axios from 'axios';

async function getUserDetails() {
	try {
		const response = await axios.get('http://localhost:3000/api/user');
		return response.data;
	} catch (error) {
		console.log({ error });
	}
}

export default async function Home() {
	const userData = await getUserDetails();
	console.log({ userData });
	return (
		<div className='flex flex-col justify-center h-screen'>
			<div className='flex justify-center'>
				<div className='border p-8 rounded'>
					<div>Name: {userData?.username}</div>
					email: {userData?.email}
				</div>
			</div>
		</div>
	);
}
