import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopHeroesRoutingModule } from './top-heroes-routing.module';
import { TopHeroesComponent } from './top-heroes.component';


@NgModule({
  declarations: [
    TopHeroesComponent
  ],
  imports: [
    CommonModule,
    TopHeroesRoutingModule
  ]
})
export class TopHeroesModule { }
