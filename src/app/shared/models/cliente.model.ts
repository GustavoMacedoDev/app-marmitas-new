import { Endereco } from './endereco.dto';

export interface Cliente {
    id : string;
    nome: string;
    telefone: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    enderecos: Endereco[];
}