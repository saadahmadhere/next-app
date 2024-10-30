import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function GET() {
	const user = await client.user.findFirst({});
	return Response.json({ username: user?.username });
}

export async function POST(req: NextRequest) {
	const body = await req.json();

	try {
		// Check if the user already exists
		const existingUser = await client.user.findUnique({
			where: {
				username: body.username,
			},
		});

		if (existingUser) {
			return NextResponse.json(
				{
					message: 'User already exists',
				},
				{ status: 409 }
			); // 409 Conflict
		}

		// Create new user
		const user = await client.user.create({
			data: {
				username: body.username,
				password: body.password,
			},
		});

		console.log('from BE', { user });

		return NextResponse.json({
			message: 'User signed up',
		});
	} catch (error) {
		console.log('error, ', error);
		return NextResponse.json(
			{
				message: 'An error occurred',
			},
			{ status: 500 }
		); // 500 Internal Server Error
	}
}
