import { Endereco } from "../cadastrar-casa/casa.model";

export class Cliente{
    id?: number;
    nome: string = '';
    email: string = '';
    urlImagemPerfil: string = '';
    contatoWhatsApp: string = '';
    endereco: Endereco = new Endereco
  }