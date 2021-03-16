import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  cek : Boolean;
  kata : String = '';
  inputTebak : string = '';
  randomNum : number = Math.floor(Math.random() * 5);

  ngOnInit() {
    console.log(this.randomNum);
  }

  tebak() {
    // console.log(this.randomNum);
    if(this.inputTebak == this.randomNum.toString()) {
      this.cek = true
      this.kata = 'Tebakan anda benar'
      this.randomNum = Math.floor(Math.random() * 5)
    } else {
      this.randomNum = Math.floor(Math.random() * 5)
      this.cek = false
      this.kata = 'Harap coba kembali'
      console.log(this.randomNum);
    }
  }
}
