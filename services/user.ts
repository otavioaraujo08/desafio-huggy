import { api as apiService, ApiService, defaultUrl } from './api';

class UserService {
    constructor(private readonly api: ApiService) {}

    public getUsers = async (): Promise<void> => {
        return this.api.get(`${defaultUrl}/users`);
    };
}
export const userService = new UserService(apiService);
