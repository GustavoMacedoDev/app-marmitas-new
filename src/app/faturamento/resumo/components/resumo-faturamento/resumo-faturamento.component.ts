import { Component, OnInit, OnChanges } from '@angular/core';
import { Pagamento } from 'src/app/shared/interfaces/pagamento.dto';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';
import { Observable } from 'rxjs';
import { Faturamento } from 'src/app/shared/interfaces/faturamento.model';

@Component({
  selector: 'app-resumo-faturamento',
  templateUrl: './resumo-faturamento.component.html',
  styleUrls: ['./resumo-faturamento.component.css']
})
export class ResumoFaturamentoComponent implements OnInit, OnChanges {

  pagamentos: Pagamento[];
  faturamentos: Faturamento[];
  total: number;

  constructor(
              private pagamentoService: PagamentoService
              ) { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("olá");
  }

  ngOnInit(): void {
    this.pagamentoService.faturamento()
      .subscribe(res => { this.faturamentos = res;
    this.soma()});
  }

  soma() {
    this.total = this.faturamentos.reduce((a, b) => a + b.valor, 0);
  }
  

}
