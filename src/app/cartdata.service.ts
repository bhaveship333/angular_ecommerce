import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartdataService {
  private data = new BehaviorSubject<any>([]);
  public shareData = this.data.asObservable();
  constructor() { }
  updateData(num:any){
    this.data.next(num);
  }
  // getCartData(){
  //   return [
  //     {"id": 0, "productname": "jbl0"},
  //     {"id": 1, "productname": "jbl01"},
  //     {"id": 2, "productname": "jbl02"},
  //     {"id": 3, "productname": "jbl03"}
  //   ]
  // }
}
