import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ab-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  open = false;
  lang = 'en';
  langages = ['en', 'fr'];

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  switchLang(selectedLang) {
    this.lang = selectedLang;
    this.translateService.use(selectedLang);
  }

}
