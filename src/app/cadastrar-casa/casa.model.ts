export class Endereco{
    id?: number;
    cep: string = '';
    nomeLugar: string = '';
    numero: string = ''
}

export class Casa {
    id?: number;
    nome: string = '';
    descricao: string = '';
    horario: string = '';
    urlImagemPerfil: string = '';
    frete: string = '';
    email: string = '';
    contatoWhatsApp: string = '';
    senha: string = '';
    endereco: Endereco = new Endereco;
  }