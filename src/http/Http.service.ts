export class HttpService<Req, Resp> {
    constructor() {}

    public async get(api: string): Promise<Resp[]> {
        try {
            const response = await fetch(api);
            const json = response.json();
            return json;
        } catch(e) {
            console.error(e);
        }
    }

    public async post(api: string, data: Req): Promise<number> {
        try {
            const response: Response = await fetch(api, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });            
            return response.status;
        } catch(e) {
            console.error(e);
        }
    }
}


