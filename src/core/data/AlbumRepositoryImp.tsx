import { Album } from "./Album";
import { AlbumRepository } from "../domain/AlbumRepository";

export class AlbumRepositoryImp implements AlbumRepository{
    getAlbum(): Album {
        return new Album('album prueba', 'album tipo prueba', 12, '10', [{prueba: '123'}], [{prueba: '123'}], {prueba: 123});
    }
}