import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slide_index = 0
  dataToShowOnCards: any = []
  slide_play = true
  // cardsData = [
  //   {
  //     id: 0,
  //     img1: 'assets/images/JBL_Quantum_400_Product Image_Hero 02.png',
  //     img2: 'assets/images/JBL_Quantum_400_Product Image_Hero Mic Up.webp',
  //     prodname: 'JBL Quantum 400',
  //     price1: '$300',
  //     price2: '$200'
  //   },
  //   {
  //     id: 1,
  //     img1: 'assets/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
  //     img2: 'assets/images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
  //     prodname: 'JBL Quantum 400',
  //     price1: '$300',
  //     price2: '$200'
  //   },
  //   {
  //     id: 2,
  //     img1: 'assets/images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
  //     img2: 'assets/images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
  //     prodname: 'JBL Quantum 400',
  //     price1: '$300',
  //     price2: '$200'
  //   },
  //   {
  //     id: 3,
  //     img1: 'assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
  //     img2: 'assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
  //     prodname: 'JBL Quantum 400',
  //     price1: '$300',
  //     price2: '$200'
  //   }
  // ]
  // cartDataObj = {
  //   name: ''
  // }
  cartDataArray: any = [];
  slides = document.querySelectorAll('.slide')
  constructor(private data: CartdataService, private http: HttpClient) { }

  ngOnInit(): void {
    // dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });

    this.showSlide()
      this.http.get('https://perfect-gown-bear.cyclic.app/list').subscribe((res)=>{
        console.log(res);
        
        this.dataToShowOnCards = res;
      })
    }

   
    onAdd(data: any){
      console.log(data);
      this.cartDataArray.push(data)
      this.data.updateData(this.cartDataArray)
    }




    onToggleClick(){
      //
    }
    hideAllSlide = () => {
      this.slides.forEach(e => {
          e.classList.remove('active')
      })
    }
    showSlide = () => {
      this.hideAllSlide()
      // this.slides[this.slide_index].classList.add('active')
    }
    nextSlide = () => this.slide_index = this.slide_index + 1 === this.slides.length ? 0 : this.slide_index + 1
    prevSlide = () => this.slide_index = this.slide_index - 1 < 0 ? this.slides.length - 1 : this.slide_index - 1
    onBtnClick(){
      this.nextSlide()
      this.showSlide()
    }

    onBtnClickPrevious(){
      this.prevSlide()
      this.showSlide()
    }
   

    
}
