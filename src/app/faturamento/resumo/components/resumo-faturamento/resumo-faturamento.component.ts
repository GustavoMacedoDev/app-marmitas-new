import { Component, OnInit, OnChanges } from '@angular/core';
import { Pagamento } from 'src/app/shared/interfaces/pagamento.dto';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resumo-faturamento',
  templateUrl: './resumo-faturamento.component.html',
  styleUrls: ['./resumo-faturamento.component.css']
})
export class ResumoFaturamentoComponent implements OnInit, OnChanges {

  pagamentos: Pagamento[];

  constructor(
              private pagamentoService: PagamentoService
              ) { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("olá");
  }

  ngOnInit(): void {
    this.pagamentoService.listaPagamentos()
      .subscribe(res => this.pagamentos = res);
    this.soma();
  }

  soma() {
    const total = this.pagamentos.reduce((a, b) => a = b.valorPago, 0);
    console.log(total);
  }
  

}
