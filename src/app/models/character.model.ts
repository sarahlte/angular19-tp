import { LocationOrigin } from "./location-origin.model";

export type Character = {
    id:number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationOrigin;
    location: LocationOrigin;
    image: string;
    episode: string[];
    url: string;
    created: string;
}