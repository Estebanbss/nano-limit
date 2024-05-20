import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, ViewChild, type OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, IonTabs,
    CommonModule,

  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @ViewChild('tabs', { static: false }) tabs!: IonTabs;

selectedTab = signal('');
constructor() {

}

setCurrentTab(){
  this.selectedTab.set(this.tabs.getSelected()!)
}


}
