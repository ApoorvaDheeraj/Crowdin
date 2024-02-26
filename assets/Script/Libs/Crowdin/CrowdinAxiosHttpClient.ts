const axios = require("analytics-node/node_modules/axios")
import { CrowdinHttpClient } from "./CrowdinModels";

export class CrowdinAxiosHttpClient implements CrowdinHttpClient {
    
    private axios: any = axios.create({});

    async get<T>(url: string): Promise<T> {
        return (await this.axios.get(url)).data;
    }
}
