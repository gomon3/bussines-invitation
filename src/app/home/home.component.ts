import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  days: Number;
  hours: Number;
  minutes: Number;
  seconds: Number;
  
  constructor() { }

  ngOnInit(): void {
    this.initPage();
    this.initCountdown('12/11/2020');
  }

  
  initCountdown(finishDate: string){
    const dateFinish: Date = new Date(finishDate);

    const source = timer(1000, 1000);
    const timerScope = source.subscribe(val => {

      let countDownDate = dateFinish.getTime();
      let now = new Date().getTime();

      let distance = countDownDate - now;


      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    });
  }

  initPage(){
    $('.loader').fadeOut();
    $('#preloder').delay(200).fadeOut("slow");

    $(".mobile-menu").slicknav({
      prependTo: '#mobile-menu-wrap',
      allowParentLinks: true
    });
  }

  goToLocation(url: any){
    window.open(url, "_blank");
  }

}
