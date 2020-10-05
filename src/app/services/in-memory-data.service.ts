import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../server/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 2, name: 'Spiderman' },
      { id: 3, name: 'Ironman' },
      { id: 4, name: 'Hulk' },
      { id: 5, name: 'Flash' },
      { id: 6, name: 'Hitman' },
      { id: 7, name: 'Batman' },
      { id: 8, name: 'Aquaman' },
      { id: 9, name: 'Shaktiman' }
    ];
    return {heroes};
  }

  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}