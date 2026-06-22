import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  @ViewChild('tabs', { read: IonTabs }) tabs?: IonTabs;

  /** Подпись к строке (лейбл в таблице). */
  entryLabel = '';
  /** Текст, который вписали. */
  entryText = '';
  /** Строки таблицы: лейбл + вписанный текст. */
  entries: { label: string; text: string }[] = [];

  constructor() {}

  selectRadio(): void {
    void this.tabs?.select('radio');
  }

  addEntry(): void {
    const text = this.entryText.trim();
    if (!text) {
      return;
    }
    this.entries.push({
      label: this.entryLabel.trim() || '—',
      text,
    });
    this.entryLabel = '';
    this.entryText = '';
  }

  removeEntry(index: number): void {
    this.entries.splice(index, 1);
  }
}
