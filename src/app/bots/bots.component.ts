import { IonContent, IonSkeletonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal, type OnInit } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';
import { CurrencyFormatService } from 'src/services/currencyFormat.service';
import { Bots } from 'src/models/bots';

@Component({
  selector: 'app-bots',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    TitleComponent,
    IonSkeletonText,

  ],
  templateUrl: './bots.component.html',
  styleUrl: './bots.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotsComponent{
  cdr = inject(ChangeDetectorRef)
  formatService = inject(CurrencyFormatService)
  constructor() {
    this.loadDelay()
  }
  Bots = signal<Bots[] | null>(null);

  formatCurrency(value: number) {
    return this.formatService.formatCurrency(value)
  }

   loadDelay(){
    setTimeout(() => {
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
      this.cdr.detectChanges()
    }, 900);
  }

}
