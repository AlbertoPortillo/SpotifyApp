export class Artista {
    id: string;
    name: string;
    popularity: number;
    type: string;
    uri: string;
    followers: object;
    genres: Array<string>;
    images: Array<object>;

    constructor(
        id: string,
        name: string,
        popularity: number,
        type: string,
        uri: string,
        followers: object,
        genres: Array<string>,
        images: Array<object>
    ){
        this.id = id;
        this.name = name;
        this.popularity = popularity;
        this.type = type;
        this.uri = uri;
        this.followers = followers;
        this.genres = genres;
        this.images =  images;
    }
}