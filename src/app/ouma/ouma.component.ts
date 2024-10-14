import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ouma',
  templateUrl: './ouma.component.html',
  styleUrls: ['./ouma.component.css']
})
export class OumaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScripts();
  }

  loadScripts() {
    const script = document.createElement('script');
    script.src = 'assets/music-player/script.js'; // Path to your JS file
    script.async = true;
    document.body.appendChild(script);
  }

}
