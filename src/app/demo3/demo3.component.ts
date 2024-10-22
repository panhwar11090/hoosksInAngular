import { CommonModule } from '@angular/common';
import { Component, DoCheck, ElementRef, Input, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.css'
})
export class Demo3Component implements OnChanges ,OnInit,DoCheck,OnDestroy{
  
  // @Input() message : string[] | undefined ;
  @Input() message : string='' ;
  @ViewChild('temp') tempPara : ElementRef | undefined

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng onchange is called')
    console.log(this.message)
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngoniy called');
    //This below console will not run because the dom is not created yet ngOnInit will not find that
    //console.log(this.tempPara?.nativeElement.innerHTML);
  }

  ngOnDestroy(): void {
      console.log('ngonDestroy called')
  }
  
  ngDoCheck(): void {
    console.log('ngDocheck called')
  }

}
