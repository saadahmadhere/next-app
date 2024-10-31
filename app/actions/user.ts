'use server'; // have to do this when creating server actions

import client from '@/db';

export default async function solve(username: string, password: string) {
	try {
		await client.user.create({
			data: {
				username,
				password,
			},
		});

		return {
			message: 'User signed up',
		};
	} catch (error) {
		console.log('error, ', error);

		return {
			message: 'An error occurred',
		};
	}
}
