type DerivAPIBrowserClientOptions = {
    url: string;
    language?: string;
    appId?: number;
    brand?: "deriv" | string;
};

export class DerivAPIBrowserClient {
    websocket: WebSocket;

    constructor(options: DerivAPIBrowserClientOptions) {
        const { url, language = "EN", appId = 1, brand = "deriv" } = options;
        this.websocket = new WebSocket(`${url}?app_id=${appId}&l=${language}&brand=${brand}`);
    }
}
