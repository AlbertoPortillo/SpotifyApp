export class Canciones {
    album: any;
    artists: Array<object>;
    explicit: boolean;
    external_ids: object;
    external_urls: object;
    href: string;
    id: string;
    name: string;
    popularity: number;
    type: string;
    uri: string;
    constructor(
         album: any,
         artists: Array<object>,
         explicit: boolean,
         external_ids: object,
         external_urls: object,
         href: string,
         id: string,
         name: string,
         popularity: number,
         type: string,
         uri: string   
    ){
        this.album = album;
        this.artists = artists;
        this.explicit= explicit;
        this.external_ids = external_ids;
        this.external_urls = external_urls;
        this.href = href;
        this.id = id;
        this.name = name;
        this.popularity = popularity;
        this.type = type;
        this.uri = uri;
    }
}