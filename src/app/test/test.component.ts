import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService } from '../service/hero.service';




declare let scrollTop: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  heroes: Hero[];

  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.service.getHeroes()
      .then(heroes => { this.heroes = heroes; console.log(this.heroes); });


    console.log('now: ' + this.service.getTemp());
    this.service.setTemp(true);
    console.log('change: ' + this.service.getTemp());
    // let qq = this.service.getHeroes();
    // qq.then(function (v) {
    //   console.log(v);

    // });
  }

  isSelected(hero: Hero) {

    return hero.id === this.selectedId;
  }

  onSelect() {
    console.log(this.heroes);
  }


}


