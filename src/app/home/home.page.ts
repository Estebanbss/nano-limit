import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSkeletonText, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { TitleComponent } from '../components/title/title.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { Bots } from 'src/models/bots';
import { CurrencyFormatService } from 'src/services/currencyFormat.service';
import { CommonModule } from '@angular/common';
import { Stats } from 'src/models/stats';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonSkeletonText, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent,TitleComponent,TabsComponent, IonGrid,CommonModule],
})
export class HomePage {
  cdr = inject(ChangeDetectorRef)
  formatService = inject(CurrencyFormatService)
  constructor() {
    this.loadDelay()
  }
  totalPortfolio = signal<number | null>(null);
  Bots = signal<Bots[] | null>(null);
  Stats = signal<Stats | null>(null);
  botsToShow = 3;
  formatCurrency(value: number) {
    return this.formatService.formatCurrency(value)
  }

  filterBots(){
    this.Bots()
  }

  expandedBots(){
      if(this.botsToShow === 3){
        this.botsToShow = this.Bots()!.length
      }else{
        this.botsToShow = 3
      }
  }




  loadDelay(){
      setTimeout(() => {
        this.totalPortfolio.set(123444)
        this.Bots.set([
          { id: 1, name: 'NanoTrader A', value: 1240, state: 'Running' },
          { id: 2, name: 'NanoTrader B', value: 300, state: 'Running' },
          { id: 3, name: 'NanoTrader C', value: 2134, state: 'Running' },
          { id: 4, name: 'NanoTrader D', value: 114, state: 'Running' },
          { id: 5, name: 'NanoTrader E', value: 29037, state: 'Running' },
          { id: 1, name: 'NanoTrader A', value: 1240, state: 'Running' },
          { id: 2, name: 'NanoTrader B', value: 300, state: 'Running' },
          { id: 3, name: 'NanoTrader C', value: 2134, state: 'Running' },
          { id: 4, name: 'NanoTrader D', value: 114, state: 'Running' },
          { id: 5, name: 'NanoTrader E', value: 29037, state: 'Running' },
          { id: 1, name: 'NanoTrader A', value: 1240, state: 'Running' },
          { id: 2, name: 'NanoTrader B', value: 300, state: 'Running' },
          { id: 3, name: 'NanoTrader C', value: 2134, state: 'Running' },
          { id: 4, name: 'NanoTrader D', value: 114, state: 'Running' },
          { id: 5, name: 'NanoTrader E', value: 29037, state: 'Running' },
        ])
        this.Stats.set(
          { today: 123, total: 1234, last7Days: 1234, last30Days: 1234 }
        )
        this.cdr.detectChanges()
      }, 900);
  }


}
