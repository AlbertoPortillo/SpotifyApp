import { Artista } from "./Artistas";
import { ArtistaRepository } from "../domain/ArtistaRepository";
import { Api, url} from "../Api/Conexiones";

class ArtistDTO {
    id: string = '';
    name: string= '';
    followers: any;
    images: any;
}
export class ArtistaRepositoryImp implements ArtistaRepository{
    async getArtistas(query: string):  Promise<Artista[]> {
        var response = await Api.get(url+'search?type=artist&include_external=audio&q='+query);
        const jsonData = await response.data.artists.items;
        return jsonData.map((item: ArtistDTO)=>new Artista(item.id, item.name, item.followers, item.images))
    }

    async ArtistaByID(id: string): Promise<any>{
        var response = await Api.get(url+'artists/'+id)
        const jsonData = await response.data;
        return jsonData;
    }
}
