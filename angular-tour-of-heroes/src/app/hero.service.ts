import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {


  getHeroes(): Hero[] {
    return HEROES;
  } 

  getHeros() void{
    this.heros = this.heroService.getHeroes();
  }

  ngOnInt () {
   this.getHeros();
  }
  constructor() { }

}
