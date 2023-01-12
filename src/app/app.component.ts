import { Component } from '@angular/core';
import { CartdataService } from './cartdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electrons';
  cartData = []
  cartLeng = 0
  constructor(private data: CartdataService) { }

  gnOnInit(): void {
    this.data.shareData.subscribe(data => this.cartData = data)
    console.log(this.cartData);
    this.cartLeng = this.cartData.length
  }
  onToggleClick(){
    
  }
}
