import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {


  private currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = 'en'; // Set the default language to English
    this.translate.setDefaultLang(this.currentLanguage);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

}
