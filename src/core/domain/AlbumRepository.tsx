import { Album } from "../data/Album";

export interface AlbumRepository {
    getAlbum(query: string): Album;
    AlbumById(id: string): Album;
}