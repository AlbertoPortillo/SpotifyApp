export class Album {
    album_type: string;
    id: string;
    name: string;
    total_tracks: number;
    images: Array<object>;
    artists: Array<object>;
    tracks: object;
    constructor(name: string, album_type: string, total_tracks: number, id: string, images: Array<object>, artists: Array<object>, tracks: object){
        this.name = name;
        this.album_type = album_type;
        this.total_tracks = total_tracks;
        this.id = id;
        this.images = images;
        this.artists = artists;
        this.tracks = tracks;
    }
}