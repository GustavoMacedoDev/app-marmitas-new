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

  constructor(
              private httpUtil: HttpUtilService,
              private httpClient: HttpClient
              ) { }

    salvaPagamento(pagamento: Pagamento): Observable<any> {
      return this.httpClient.post(env.baseUrl, pagamento, this.httpUtil.headers() );
    }


}
