export interface Person {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geolocation
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Geolocation {
    lat: number;
    lng: number;
}