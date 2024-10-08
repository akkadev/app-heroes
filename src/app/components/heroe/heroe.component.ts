import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html', 
})
export class HeroeComponent {
  heroe: any = {};
  constructor( private activatedRoute: ActivatedRoute, private heroesService : HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.heroe = this.heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit() {

  }
  verHeroe(idx: number) {
    console.log(idx);
  }
}
