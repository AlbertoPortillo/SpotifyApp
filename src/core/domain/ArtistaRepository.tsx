import { Artista } from "../data/Artistas";

export interface ArtistaRepository {
    getArtista() : Artista;
}