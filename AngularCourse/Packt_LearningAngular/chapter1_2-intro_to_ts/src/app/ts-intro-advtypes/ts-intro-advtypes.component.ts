import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-intro-advtypes',
  templateUrl: './ts-intro-advtypes.component.html',
  styleUrls: ['./ts-intro-advtypes.component.css'],
})
export class TsIntroAdvtypesComponent {}

interface Hero {
  name: string;
  power: number;
  powers: {
    [key: string]: number;
  };
  powersRecord: Record<string, number>;
  powersUnion: number[] | Record<string, number>;
}
const hero: Partial<Hero> = {
  name: 'Boothstomper',
};
