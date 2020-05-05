import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPfComponent } from './components';
import { CadastroPfComponent } from './components/cadastro-pf.component';
import { ListaPfComponent } from './components/lista-pf/lista-pf.component';


export const CadastroPfRoutes: Routes = [
	{
		path: 'cadastro-pf',
		component: CadastroPfComponent,
		children: [
		  {
			path: '', 
			component: CadastrarPfComponent 
		  }
		]
	},
	{
		path: 'lista-clientes',
		component: ListaPfComponent
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(CadastroPfRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPfRoutingModule {
}