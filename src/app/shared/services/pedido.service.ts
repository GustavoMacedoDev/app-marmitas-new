import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { PedidoDto } from '../interfaces';
import { ListaPedido } from '../interfaces/lista-pedido.dto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly PATH: string = 'api/pedido/';
  private readonly PATHMESA: string = 'api/pedidoOpcao/';
  private readonly PATHMESAID: string = 'api/pedidosMesa/';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

     listarPedidos(): Observable<any>{
       return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
     }

     listaPedidoById(id): Observable<any> {
       return this.httpClient.get(
         env.baseUrl + this.PATH + id, this.httpUtil.headers());
     }

     listaPedidoByIdMesa(id: number): Observable<any> {
      return this.httpClient.get(
        env.baseUrl + this.PATHMESAID + id, this.httpUtil.headers());
     }

     listarPedidosPorOpcao(id: number): Observable<any> {
      return this.httpClient.get(
        env.baseUrl + this.PATHMESA + id, this.httpUtil.headers());
    }
}