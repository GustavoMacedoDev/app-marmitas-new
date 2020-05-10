import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Pagamento } from '../interfaces/pagamento.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private readonly PATHCADASTRA: string = 'api/pagamento';
  private readonly PATHBUSCAPORMESA: string = 'api/pagamento/mesa/';

  constructor(
              private httpUtil: HttpUtilService,
              private httpClient: HttpClient
              ) { }

    salvaPagamento(pagamento: Pagamento): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATHCADASTRA, pagamento, this.httpUtil.headers() );
    }

    findPagamentosByIdMesa(id): Observable<any> {
      return this.httpClient.get(
                                env.baseUrl + this.PATHBUSCAPORMESA + id,
                                this.httpUtil.headers()
                                );
    }

}
