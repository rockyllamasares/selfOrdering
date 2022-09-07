import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }
  onClick(){
    this.router.navigateByUrl('/tag/Menu');
   }

   playAudio(){
    let audio = new Audio();
    audio.src = "../assets/sound/2 End Game.mp3";
    audio.load();
    audio.play();
   }
}

