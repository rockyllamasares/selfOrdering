import { CartItem } from "./CartItem";

export class Order{
  id!:number;
  items!: CartItem[];
  totalPrice!:number;
}
//reset() { throw new Error('Method not implemented.'); }
