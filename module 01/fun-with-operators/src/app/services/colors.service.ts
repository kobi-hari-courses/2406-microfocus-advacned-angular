import { Injectable } from '@angular/core';
import { ALLCOLORS } from '../models/all-colors';
import { Color } from '../models/color.model';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  readonly allColors = Object
    .keys(ALLCOLORS)
    .map<Color>(key => ({code: key, displayName: ALLCOLORS[key] }))


  constructor() { }

  // string => Color[]
  search(keyword: string): Color[] {
    if (!keyword) return [];

    keyword = keyword.toLowerCase();
    return this.allColors.filter(clr => clr.displayName.toLowerCase().includes(keyword));
  }

  searchAsync(keyword: string) : Observable<Color[]>{
    const d = Math.random() * 4000 + 1000;

    return of(this.search(keyword)).pipe(
      delay(d), 
      tap(val => console.log(`search for ${keyword} completed`))
    );

  }
  

}
