import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class HeroService {

  constructor() { }

  getHeros(): Observable<Hero[]> {
    return of(HEROES);
  }

}
