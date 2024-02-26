const axios = require("analytics-node/node_modules/axios")
import { HttpClient } from './model';

export class AxiosHttpClient implements HttpClient {
    private axios: any = axios.create({});

    async get<T>(url: string): Promise<T> {
        return (await this.axios.get(url)).data;
    }
}
