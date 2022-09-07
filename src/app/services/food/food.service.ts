
import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll():Food[] {
    return sample_foods;
  }

  getAllTags():Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId: number): Food {                                   //change string to number
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

}
  /*
  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllTags():Tag[]{
    return[
      { name: 'Menu', count: 7},
      { name: 'Drinks', count: 3},
      { name: 'Dessert', count: 9}
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id:1,
        name:'meal-1',
        price:10,
        imageUrl:'/assets/image/meal1.jpg',
        tags:['Menu'],
      },
      {
        id:2,
        name:'meal-2',
        price:20,
        imageUrl:'/assets/image/meal2.jpg',
        tags:['Menu'],
      },
      {
        id:3,
        name:'meal-3',
        price:30,
        imageUrl:'/assets/image/meal3.jpg',
        tags:['Menu'],
      },
      {
        id:4,
        name:'meal-4',
        price:40,
        imageUrl:'/assets/image/meal4.jpg',
        tags:['Menu'],
      },
      {
        id:5,
        name:'meal-5',
        price:50,
        imageUrl:'/assets/image/meal5.jpg',
        tags:['Menu'],
      },
      {
        id:6,
        name:'meal-6',
        price:60,
        imageUrl:'/assets/image/meal6.jpg',
        tags:['Menu'],
      },
      {
        id:7,
        name:'meal-7',
        price:70,
        imageUrl:'/assets/image/meal7.jpg',
        tags:['Menu'],
      },
      {
        id:8,
        name:'Drink-1',
        price:10,
        imageUrl:'/assets/image/drink1.jpg',
        tags:['Drinks'],
      },
      {
        id:9,
        name:'Drink-2',
        price:10,
        imageUrl:'/assets/image/drink2.jpg',
        tags:['Drinks'],
      },
      {
        id:10,
        name:'Drink-3',
        price:10,
        imageUrl:'/assets/image/drink3.jpg',
        tags:['Drinks'],
      },
      {
        id:11,
        name:'Dessert-1',
        price:10,
        imageUrl:'/assets/image/dessert1.jpg',
        tags:['Dessert'],
      },
      {
        id:12,
        name:'Dessert-2',
        price:10,
        imageUrl:'/assets/image/dessert2.jpg',
        tags:['Dessert'],
      },
      {
        id:13,
        name:'Dessert-3',
        price:10,
        imageUrl:'/assets/image/dessert3.jpg',
        tags:['Dessert'],
      },
      {
        id:14,
        name:'Dessert-4',
        price:10,
        imageUrl:'/assets/image/dessert4.jpg',
        tags:['Dessert'],
      },
      {
        id:15,
        name:'Dessert-5',
        price:10,
        imageUrl:'/assets/image/dessert5.jpg',
        tags:['Dessert'],
      },
      {
        id:16,
        name:'Dessert-6',
        price:10,
        imageUrl:'/assets/image/dessert6.jpg',
        tags:['Dessert'],
      },
      {
        id:17,
        name:'Dessert-7',
        price:10,
        imageUrl:'/assets/image/dessert7.jpg',
        tags:['Dessert'],
      },
    ];
  }
}
*/
