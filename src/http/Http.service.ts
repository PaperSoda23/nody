export class HttpService<Req, Resp> {
    /**
     * @summary get data from api
     * @param api api to get data from url
     * @returns json data, received from api 
     */
    public async get(api: string): Promise<Resp[]> {
        try {
            const response = await fetch(api);
            const json = response.json();
            return json;
        } catch(e) {
            console.error(e);
        }
    }
    /**
     * @summary post data to api
     * @param api api url to post to
     * @param data data to post to api
     * @returns status code recieved after post 
     * 201 on success
     */
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


