import axios, { Axios, AxiosResponse } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

import { AuthResponse } from "./models/Auth.model";

const BASE_URL = "https://api.onepeloton.com";
const loginURL = `/auth/login`;

export class HttpClient {
    private httpClient: Axios;

    constructor(private username: string, private password: string) {
        this.httpClient = this.createClient();
    }

    async makeRequest(uri: string, params = {}): Promise<AxiosResponse> {
        // Setup Session With API
        this.createSession();
        const url = `${BASE_URL}${uri}`;
        const reponse = this.httpClient.get(url, { params });

        return reponse;
    }

    async getUserId(): Promise<string> {
        const payload = {
            username_or_email: this.username,
            password: this.password,
        };

        const response = await this.httpClient.post(`${BASE_URL}${loginURL}`, payload);

        const authData: AuthResponse = response.data;

        return authData.user_id;
    }

    private async createSession(): Promise<void> {
        const payload = {
            username_or_email: this.username,
            password: this.password,
        };

        await this.httpClient.post(`${BASE_URL}${loginURL}`, payload);
    }

    private createClient(): Axios {
        const headers = {
            "Content-Type": "application/json",
            "User-Agent": "peloton-client/0.0.1",
        };

        const jar = new CookieJar();
        return wrapper(axios.create({ jar, headers }));
    }
}
