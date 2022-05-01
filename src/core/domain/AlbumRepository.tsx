import { Album } from "../data/Album";

export interface AlbumRepository {
    getAlbum() : Album;
}