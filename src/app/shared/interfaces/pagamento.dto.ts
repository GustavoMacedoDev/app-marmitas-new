import { FormaPagamento } from '../models/forma-pagamento.model';
import { MesaDto } from './mesa.dto';
import { Cliente } from '../models/cliente.model';

export interface Pagamento {
    id: string;
    valor: number;
    formaPagamento: FormaPagamento;
    mesa: MesaDto;
    cliente: Cliente;
}