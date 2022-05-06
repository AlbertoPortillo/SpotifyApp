// import { AlbumRepositoryImp } from '../data/AlbumRepositoryImp';
// import { AlbumServiceImpl } from '../domain/AlbumUseCase';
import { ArtistaServiceImpl } from '../domain/ArtistaUseCase';
import { ArtistaRepositoryImp } from '../data/ArtistaRepositoryImp';

export function getSampleArtistData(query: string) {
  let artistaRepository = new ArtistaRepositoryImp();
  let artistaService = new ArtistaServiceImpl(artistaRepository);
  return artistaService.getSampleArtista(query);
}

export function getArtistID(id: string){
  let artistaRepository = new ArtistaRepositoryImp();
  let artistaService = new ArtistaServiceImpl(artistaRepository);
  return artistaService.getArtista(id);
}

