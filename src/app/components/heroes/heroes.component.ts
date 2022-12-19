import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html' 
})
export class HeroesComponent {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) {
    
  }
  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
 
}
