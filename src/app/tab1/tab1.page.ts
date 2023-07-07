import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(){

    let num = -1; 

    let num2 = -2; 
    
    let num3 = num + num2; 

    if(num3 > 0 ){
      console.log("numero"+num3)
    }
    else(
      console.log("numero menor ")
      
    )

    console.log(num3)
  }

}
