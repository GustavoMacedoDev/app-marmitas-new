import { FormaPagamento } from '../models/forma-pagamento.model';
import { MesaDto } from './mesa.dto';

export interface Pagamento {
    id: string;
    valor: number;
    formaPagamento: FormaPagamento;
    mesa: MesaDto;
}