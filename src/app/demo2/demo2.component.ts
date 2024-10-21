import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css',
  styles: ['h2 { color: green; }'] 
})
export class Demo2Component implements AfterContentInit    {
  @ContentChild('projectedContent') projectedContent!: ElementRef; // Use ContentChild to access projected content

  ngAfterContentInit(): void {
    if (this.projectedContent) {
      console.log('Projected content:', this.projectedContent.nativeElement.textContent);
      this.projectedContent.nativeElement.style.color = 'blue'; // Change text color to blue
    } else {
      console.warn('No projected content found.');
    }
  }
  

}
