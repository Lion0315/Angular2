import { HeroService } from './../service/hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    console.log('now: ' + this.service.getTemp());
    this.service.setTemp(true);
    console.log('change: ' + this.service.getTemp());
  }

}
