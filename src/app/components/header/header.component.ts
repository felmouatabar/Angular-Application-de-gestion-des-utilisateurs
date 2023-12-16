import { Component } from '@angular/core';
import {TranslationService} from "../../service/translation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage: string;
  constructor(private translationService: TranslationService) {
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }
  changeLang(lang: string): void {
    this.translationService.setLanguage(lang);
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }
}
