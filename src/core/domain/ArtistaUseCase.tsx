// import { Album } from '../data/Album';
// import { AlbumRepository } from './AlbumRepository';
import { ArtistaRepository } from './ArtistaRepository';
import { Artista } from '../data/Artistas';

export interface AlbumService {
    getSampleArtista(query: string): Artista;
}

export class ArtistaServiceImpl implements AlbumService {
    artistaRepo: ArtistaRepository;

  constructor(artistaRepo: ArtistaRepository) {
    this.artistaRepo = artistaRepo;
  }

  getSampleArtista(query: string): Artista {
    return this.artistaRepo.getArtistas(query);
  }

  getArtista(id: string): Artista{
    return this.artistaRepo.ArtistaByID(id);
  }
}