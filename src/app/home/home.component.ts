import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('galleryTitle', { static: false }) galleryTitle!: ElementRef;
  private text: string = 'Land Cover Tunisia Map'; // Your title text
  private index: number = 0;

  ngAfterViewInit(): void {
    this.type();
  }

  private type(): void {
    // Set text content without affecting the blinking cursor
    this.galleryTitle.nativeElement.querySelector('.text').textContent = this.text.slice(0, this.index);

    if (this.index < this.text.length) {
      this.index++;
      setTimeout(() => this.type(), 100); // Adjust typing speed (in milliseconds)
    }
  }
  @ViewChild('target') target!: ElementRef;

  scrollDown() {
    console.log('Button clicked, scrolling down!');
    this.target.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @ViewChild('targetcarte') targetcarte!: ElementRef;

  scrollDowncarte() {
    console.log('Button clicked, scrolling down!');
    this.target.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
