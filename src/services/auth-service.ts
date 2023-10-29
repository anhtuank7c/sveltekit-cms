import { auth } from '$lib/server/lucia';

class AuthService {
	async login(
		formData: { email: string; password: string },
		metadata: { platform: string; ip_address: string }
	) {
		const { email, password } = formData;
		const key = await auth.useKey('email', email.toLowerCase(), password);
		return auth.createSession({ userId: key.userId, attributes: metadata });
	}

	async logout(userId: string) {
		return auth.invalidateAllUserSessions(userId);
	}

	signUp(formData: { email: string; firstName: string; lastName: string; password: string }) {
		const { email, firstName, lastName, password } = formData;
		return auth.createUser({
			key: {
				providerId: 'email',
				providerUserId: email.toLowerCase(),
				password
			},
			attributes: {
				email,
				firstName,
				lastName
			}
		});
	}
}

export const authService = new AuthService();
