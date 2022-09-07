import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/model/Tag';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tags?:Tag[];
  constructor( foodService:FoodService) {
    this.tags = foodService.getAllTags();
  }

  ngOnInit(): void {

  }

}
