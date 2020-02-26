import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eco-news',
  templateUrl: './eco-news.component.html',
  styleUrls: ['./eco-news.component.css']
})
export class EcoNewsComponent implements OnInit {

  @ViewChild("footerElement", { static: true }) footer: ElementRef;

  options = {
    rootMargin: '0px',
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        alert("Hello");
      }
    });
  }, this.options);

  constructor(private titleService: Title) {
  }

  ngAfterViewInit() {
    this.observer.observe(this.footer.nativeElement)
  }

  ngOnInit() {
    this.titleService.setTitle('Eco News');
  }
  changeView() { }
}
