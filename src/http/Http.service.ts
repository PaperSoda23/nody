class HttpService {
    public async get(api: string) {
        try {
            const response = await fetch(api);
            const json = response.json();
            return json;
        } catch(e) {
            console.error(e);
        }
    }

    public post() {

    }
}

interface Response {

}

