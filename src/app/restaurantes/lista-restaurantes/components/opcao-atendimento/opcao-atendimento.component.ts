import { Component, OnInit } from '@angular/core';
import { OpcaoAtendimentoService } from 'src/app/shared/services/opcao-atendimento.service';
import { OpcaoAtendimento } from 'src/app/shared/interfaces/opcao-atendimento.dto';

@Component({
  selector: 'app-opcao-atendimento',
  templateUrl: './opcao-atendimento.component.html',
  styleUrls: ['./opcao-atendimento.component.css']
})
export class OpcaoAtendimentoComponent implements OnInit {

  options: OpcaoAtendimento[];

  constructor(
              private opcaoService: OpcaoAtendimentoService
              ) { }

  ngOnInit(): void {
    this.opcaoService.listarOpAtendimento()
      .subscribe(res => this.options = res);
  }

}
