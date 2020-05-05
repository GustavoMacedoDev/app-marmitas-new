import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraMesaComponent } from './components/cadastra-mesa/cadastra-mesa.component';

export const MesaRoutes: Routes = [
	{
		path: 'cadastra-mesa',
		component: CadastraMesaComponent
	}
	
];

@NgModule({
  imports: [ RouterModule.forChild(MesaRoutes) ],
  exports: [ RouterModule ]
})
export class MesaRoutingModule {
}