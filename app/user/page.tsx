import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function getUserDetails() {
	try {
		const user = await client.user.findFirst();

		return {
			email: user?.username,
			name: user?.username,
		};
	} catch (error) {
		console.log({ error });
	}
}

export default async function Home() {
	const userData = await getUserDetails();

	return (
		<div className='flex flex-col justify-center h-screen'>
			<div className='flex justify-center'>
				<div className='border p-8 rounded'>
					<div>Name: {userData?.name}</div>
					email: {userData?.email}
				</div>
			</div>
		</div>
	);
}
