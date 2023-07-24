import { api as apiService, ApiService, defaultUrl } from './api';

interface MessageParams {
    userId: number;
    message: string;
    date: string;
    isMine: boolean;
}

class ChatService {
    constructor(private readonly api: ApiService) {}

    public getIdOneMessages = async (): Promise<void> => {
        return this.api.get(`${defaultUrl}/userIdOne`);
    };

    public postIdOneMessages = async (params: MessageParams): Promise<void> => {
        return this.api.post(`${defaultUrl}/userIdOne`, params);
    };

    public getIdTwoMessages = async (): Promise<void> => {
        return this.api.get(`${defaultUrl}/userIdTwo`);
    };

    public postIdTwoMessages = async (params: MessageParams): Promise<void> => {
        return this.api.post(`${defaultUrl}/userIdTwo`, params);
    };

    public getIdThreeMessages = async (): Promise<void> => {
        return this.api.get(`${defaultUrl}/userIdThree`);
    };

    public postIdThreeMessages = async (
        params: MessageParams
    ): Promise<void> => {
        return this.api.post(`${defaultUrl}/userIdThree`, params);
    };
}
export const chatService = new ChatService(apiService);
