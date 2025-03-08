import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as iconsData from './../../../assets/selection.json';
import { BehaviorSubject } from 'rxjs';
import { ClipboardModule } from '@angular/cdk/clipboard';


@Component({
  selector: 'kds-icon-list',
  templateUrl: './kds-icons-list.component.html',
  styleUrls: ['./kds-icons-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ClipboardModule]
})
export class KdsIconsListComponent {
  iconsData: any = iconsData;
  searchTerm: string = ''
  showAlert: boolean = false;
  alertMessage: string = '';
  showAlert$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  alertMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  filteredIcons() {
    return this.iconsData.icons.filter((icon: any) => {
      const nameMatch = icon.properties.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const tagsMatch = icon.icon.tags.some((tag: any) => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return nameMatch || tagsMatch;
    });
  }

  copyIconName(iconName: string) {
    const iconWithPrefix = `${this.iconsData.preferences.fontPref.prefix}${iconName}`;
    this.showAlert$.next(true);
    this.alertMessage$.next(`Nome copiado: ${iconWithPrefix}`)
    setTimeout(() => {
      this.showAlert$.next(false);
    }, 3000);
  }
}
