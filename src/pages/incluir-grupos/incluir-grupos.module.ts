import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncluirGruposPage } from './incluir-grupos';

@NgModule({
  declarations: [
    IncluirGruposPage,
  ],
  imports: [
    IonicPageModule.forChild(IncluirGruposPage),
  ],
  entryComponents: [IncluirGruposPage]
})
export class IncluirGruposPageModule {}
