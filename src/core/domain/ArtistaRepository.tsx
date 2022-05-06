import { Artista } from "../data/Artistas";

export interface ArtistaRepository {
    getArtistas(query: string) : Artista;
    ArtistaByID(id: string) : Artista;
}