import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Demo3Component, DemoComponent, CommonModule, FormsModule, Demo2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hooks';

  // private number : number = 1  ;
  // secondNumber : number = 1;

  // isVisible : boolean  = true;
  // numbers: number[] = [];

  // setVisibility(){
  //   this.isVisible = !this.isVisible
  // }
  // get counter (){
  //   return this.number;
  // }

  // set counter (value:number){
  //   this.number = value;
  // }

  // increament (){
  //   this.counter++;
  //   this.secondNumber++;
  // }

  // decreament (){
  //   this.counter--;
  //   this.secondNumber--;
  // }

  // add (){
  //   //this.numbers.push(1);
  //   this.numbers = [...this.numbers,2]
  // }

  inputVal : string = '';
  // inputVal : string[] = ['hello' , 'hi huzaifa']

  toDestroy : boolean = false

  onSbtClicked(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value

    // this.inputVal.push(inputEl.value);
  }


  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }





}
