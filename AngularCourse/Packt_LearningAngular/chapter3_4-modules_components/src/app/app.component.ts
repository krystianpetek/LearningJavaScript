import { Component, Inject, OnDestroy } from '@angular/core';
import { APP_CONFIG, AppConfig, appSettings } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: appSettings,
    },
  ],
})
export class AppComponent implements OnDestroy {
  constructor(@Inject(APP_CONFIG) config: AppConfig) {}

  ngOnDestroy(): void {}
  title = 'chapter3-modules';
  today = new Date();
}
