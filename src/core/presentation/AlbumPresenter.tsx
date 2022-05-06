import { AlbumRepositoryImp } from '../data/AlbumRepositoryImp';
import { AlbumServiceImpl } from '../domain/AlbumUseCase';

export function getSampleAlbumData(query: string) {
  let albumRepository = new AlbumRepositoryImp();
  let albumService = new AlbumServiceImpl(albumRepository);
  return albumService.getSampleAlbum(query);
}

export function getAlbumID(id: string){
  let albumRepository = new AlbumRepositoryImp();
  let albumService = new AlbumServiceImpl(albumRepository);
  return albumService.getAlbum(id);
}

