import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { FetchDataService } from './fetch-data.service';
// import { ChangeParamsService } from 'src/app/change-params.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  promiseForFood: Promise<boolean>;
  p: number = 1;
  food: [{ type: '' }];
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fetchData: FetchDataService // private changeParam: ChangeParamsService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.getCurrentParam();
      }
    });
  }

  ngOnInit(): void {
    this.promiseForFood = Promise.resolve(false);
    this.getCurrentParam();
  }

  getCurrentParam() {
    this.p = 1;
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.fetchData.getData().subscribe((data: any) => {
      this.food = data.food.filter((el) => {
        if (el.type === this.id) {
          return el;
        }
      });

      this.promiseForFood = Promise.resolve(true);
    });
  }
  onActivate() {
    window.scroll(0, 0);
  }
}
