import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {
  topHeroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getTopHeroes()
      .subscribe(heroes => this.topHeroes = heroes);
  }

}
