import { Component, Inject } from '@angular/core';
import { BLANK } from '../../tokens/blank.token';

@Component({
  selector: 'app-page-bchild-1',
  standalone: true,
  imports: [],
  templateUrl: './page-bchild-1.component.html',
  styleUrl: './page-bchild-1.component.css'
})
export default class PageBchild1Component {
  constructor(@Inject(BLANK) protected blank: number) { }

}
