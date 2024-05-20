import { IonContent, IonSkeletonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal, type OnInit } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';
import { Current } from 'src/models/current';
import { CurrencyFormatService } from 'src/services/currencyFormat.service';

@Component({
  selector: 'app-current',
  standalone: true,
  imports: [IonSkeletonText,
    CommonModule,
    IonContent,
    TitleComponent
  ],
  templateUrl: './current.component.html',
  styleUrl: './current.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentComponent implements OnInit {
  cdr = inject(ChangeDetectorRef)
  formatService = inject(CurrencyFormatService)
  Current = signal<Current[] | null>(null);
  expanded = signal<any>(null);
  ngOnInit(): void {
    this.loadDelay();
   }

   expandCurrent(value:any){
    if(this.expanded() === value){
      this.expanded.set(null)
    }else{
      this.expanded.set(value)
    }
   }

   formatCurrency(value: number) {
    return this.formatService.formatCurrency(value)
  }

   loadDelay(){
    setTimeout(() => {
      this.Current.set([
        {
          id: 1,
          name: 'NanoTrader A',
          coin: 'KAS/USDT',
          orders: 3,
          value: -457,
          percentage: -2.62,
          date: '27/02/2023 11:36',
          totalBought: 1624.4831,
          baseVolume: 864,
          totalCoin: 48436,
          MFI: 26.43673,
          levarge: 2
        },
        {
          "id": 2,
          "name": "NanoTrader B",
          "coin": "KAS/USDT",
          "orders": 5,
          "value": 300,
          "percentage": 1.20,
          "date": "15/03/2023 14:52",
          "totalBought": 2500.55,
          "baseVolume": 1000,
          "totalCoin": 50000,
          "MFI": 35.65,
          "levarge": 3
        },
        {
          "id": 3,
          "name": "NanoTrader C",
          "coin": "LDO/USDT",
          "orders": 7,
          "value": -150,
          "percentage": -0.75,
          "date": "01/04/2023 09:24",
          "totalBought": 1800.77,
          "baseVolume": 900,
          "totalCoin": 45000,
          "MFI": 28.42,
          "levarge": 1.5
        },
      ])
      this.cdr.detectChanges()
    }, 900);
  }

}
