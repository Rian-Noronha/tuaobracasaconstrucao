import { Endereco } from "../cadastrar-casa/casa.model";
import { Cliente } from "../dashboard/cliente.model";


export class Demanda{

    id: number = 0; 
    detalhes: string = '';
    trabalhoSerFeito: string = ''; 
    dataPublicacao: string = '';
    urlOrcamento: string = '';
    endereco: Endereco = new Endereco;
}