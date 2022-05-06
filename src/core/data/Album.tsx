export class Album {
    id: string;
    name: string;
    images: Array<object>;
    artists: Array<object>;
    constructor(name: string, id: string, images: Array<object>, artists: Array<object>){
        this.name = name;
        this.id = id;
        this.images = images;
        this.artists = artists;
    }
}