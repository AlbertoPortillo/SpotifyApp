import { Album } from "./Album";
import { AlbumRepository } from "../domain/AlbumRepository";
import { Api, url} from "../Api/Conexiones";

class AlbumDTO {
    artists: any;
    id: string = '';
    images: any;
    name: string= '';
}
export class AlbumRepositoryImp implements AlbumRepository{
    async getAlbum(query: string):  Promise<Album[]> {
        var response = await Api.get(url+'search?type=album&include_external=audio&q='+query)
        const jsonData = await response.data.albums.items;
        return jsonData.map((item: AlbumDTO)=>new Album(item.name, item.id, item.images, item.artists))
    }

    async AlbumById(id: string): Promise<any>{
        var response = await Api.get(url+'albums/'+id)
        const jsonData = await response.data;
        return jsonData;
    }
}
