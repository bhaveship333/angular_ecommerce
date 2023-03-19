import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  popupCount:any = 0;
  name = new FormControl('');
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    numbr: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('popup') == null){
      localStorage.setItem('popup', '0')
    }
    this.popupCount = Number(localStorage.getItem('popup'));
  }
 

  onSkip(){
    localStorage.setItem('popup', this.popupCount + 1);
    if(Number(localStorage.getItem('popup')) == 3 ){
      document.cookie = 'hidePopUpforSometime=true; Max-Age=' + 24*60*60;
    }
  }

  onSubmit(){
    console.log(this.signupForm.value);
    
  }

}
