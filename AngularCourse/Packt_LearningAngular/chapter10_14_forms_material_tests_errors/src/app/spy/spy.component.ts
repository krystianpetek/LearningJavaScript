import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css'],
})
export class SpyComponent implements OnInit {
  private title: Title;
  public caption: string = '';

  constructor(title: Title) {
    this.title = title;
  }
  ngOnInit(): void {
    this.title.setTitle('My Angular app');
    this.caption = this.title.getTitle();
  }
}
