export class Artista {
    id: string;
    name: string;
    followers: object;
    images: Array<object>;

    constructor(
        id: string,
        name: string,
        followers: object,
        images: Array<object>
    ){
        this.id = id;
        this.name = name;
        this.followers = followers;
        this.images =  images;
    }
}