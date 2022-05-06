import { Album } from '../data/Album';
import { AlbumRepository } from './AlbumRepository';

export interface AlbumService {
  getSampleAlbum(query: string): Album;
}

export class AlbumServiceImpl implements AlbumService {
  albumRepo: AlbumRepository;

  constructor(albumRepo: AlbumRepository) {
    this.albumRepo = albumRepo;
  }

  getSampleAlbum(query: string): Album {
    return this.albumRepo.getAlbum(query);
  }

  getAlbum(id: string): Album{
    return this.albumRepo.AlbumById(id);
  }
}