import { authService } from '$services/auth-service';

class AuthUseCases {
	login(
		formData: { email: string; password: string },
		metadata: { platform: string; ip_address: string }
	) {
		return authService.login(formData, metadata);
	}

	async signUp(formData: { email: string; firstName: string; lastName: string; password: string }) {
		return authService.signUp(formData);
	}

	async logout(userId: string) {
		await authService.logout(userId);
	}
}

export const authUseCases = new AuthUseCases();
