import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges ,OnDestroy,DoCheck,AfterContentChecked,OnInit,OnChanges, AfterContentChecked, AfterViewChecked {

  @Input() myCounter! : number;

  @Input() secondNumber! : number;

  // @Input() numbers ! : number;
  
  //@Input()  numbers! : number

  @Input() numbers!: number[];


  public changeLog : string[] = []

  ngOnInit (): void{
    this.myCounter = 2;
    this.secondNumber = 2;
  }

  ngOnChanges(changes : SimpleChanges ):void{
    for(const propName in changes){
      const change : SimpleChange = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      this.changeLog.push(`ngOnChange ${propName}: currentValues = ${current} , previousValue = ${prev}, firstCahnge = ${change.firstChange}`)
     
    }
   
  }

  ngDoCheck(): void {
    console.log('ngDocheck')
    this.changeLog.push(`ngDocheck : ${this.numbers.toString()}`)

  }

  ngAfterContentInit(): void{
    console.log();
    this.changeLog.push('ngAfterConetentInit')
  }

  ngAfterContentChecked(): void{
    this.changeLog.push('ngAfterContentChecked')
  }
  
  ngAfterViewInit(): void{
    this.changeLog.push('ngAfterViewInit')
  }

  ngAfterViewChecked(): void{
    this.changeLog.push('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.changeLog.push('ngOnDestroy');
  }


}
