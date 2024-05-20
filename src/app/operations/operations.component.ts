import { IonContent, IonSkeletonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject, signal, type OnInit } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';
import { CurrencyFormatService } from 'src/services/currencyFormat.service';
import { Current } from 'src/models/current';

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [IonSkeletonText,
    CommonModule,
    IonContent,
    TitleComponent
  ],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperationsComponent implements OnInit {
   cdr = inject(ChangeDetectorRef)
   formatService = inject(CurrencyFormatService)
   Current = signal<Current[] | null>(null);
   expanded = signal<any>(null);
   currentPage = signal(1)
   lastPage = 0;

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

    setCurrentPage(page:any) {
      this.currentPage.set(page);
    }

    nextPage() {
    if (this.currentPage() < Math.ceil(this.Current()!.length / 8)) {
        this.currentPage.set(this.currentPage() + 1);
      }
    }

    prevPage() {
      if (this.currentPage() > 1) {
        this.currentPage.set(this.currentPage() - 1);
      }
    }

    getPaginationArray() {
      const totalPages = Math.ceil(this.Current()!.length / 8);
      let startPage = Math.max(this.currentPage() - 1, 1);
      let endPage = Math.min(startPage + 2, totalPages);

      if (endPage - startPage < 2) {
        startPage = Math.max(endPage - 2, 1);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      this.lastPage = totalPages;

      return pages;
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
         {
           "id": 4,
           "name": "NanoTrader D",
           "coin": "KAS/USDT",
           "orders": 2,
           "value": 520,
           "percentage": 2.50,
           "date": "22/03/2023 17:15",
           "totalBought": 2100.50,
           "baseVolume": 1050,
           "totalCoin": 48000,
           "MFI": 31.50,
           "levarge": 2.5
         },
         {
           "id": 5,
           "name": "NanoTrader E",
           "coin": "LDO/USDT",
           "orders": 4,
           "value": -250,
           "percentage": -1.50,
           "date": "10/04/2023 08:10",
           "totalBought": 2000.65,
           "baseVolume": 1100,
           "totalCoin": 46000,
           "MFI": 27.80,
           "levarge": 1.8
         },
         {
           "id": 6,
           "name": "NanoTrader F",
           "coin": "KAS/USDT",
           "orders": 6,
           "value": 150,
           "percentage": 0.75,
           "date": "05/03/2023 19:40",
           "totalBought": 3000.80,
           "baseVolume": 1250,
           "totalCoin": 49000,
           "MFI": 33.25,
           "levarge": 2.2
         },
         {
           "id": 7,
           "name": "NanoTrader G",
           "coin": "KAS/USDT",
           "orders": 3,
           "value": 420,
           "percentage": 2.10,
           "date": "18/03/2023 11:50",
           "totalBought": 2200.45,
           "baseVolume": 1150,
           "totalCoin": 47000,
           "MFI": 30.40,
           "levarge": 2.3
         },
         {
           "id": 8,
           "name": "NanoTrader H",
           "coin": "LDO/USDT",
           "orders": 5,
           "value": -320,
           "percentage": -1.75,
           "date": "03/04/2023 07:30",
           "totalBought": 1900.55,
           "baseVolume": 950,
           "totalCoin": 44000,
           "MFI": 29.90,
           "levarge": 1.7
         },
         {
           "id": 9,
           "name": "NanoTrader I",
           "coin": "KAS/USDT",
           "orders": 4,
           "value": 350,
           "percentage": 1.75,
           "date": "12/03/2023 14:22",
           "totalBought": 2400.60,
           "baseVolume": 1200,
           "totalCoin": 47500,
           "MFI": 32.10,
           "levarge": 2.4
         },
         {
           "id": 10,
           "name": "NanoTrader J",
           "coin": "KAS/USDT",
           "orders": 2,
           "value": 580,
           "percentage": 3.00,
           "date": "27/02/2023 16:55",
           "totalBought": 2600.70,
           "baseVolume": 1300,
           "totalCoin": 50000,
           "MFI": 36.20,
           "levarge": 2.6
         },
         {
           "id": 11,
           "name": "NanoTrader K",
           "coin": "LDO/USDT",
           "orders": 6,
           "value": -200,
           "percentage": -1.00,
           "date": "15/04/2023 13:35",
           "totalBought": 1700.85,
           "baseVolume": 850,
           "totalCoin": 43000,
           "MFI": 26.90,
           "levarge": 1.6
         },
         {
           "id": 12,
           "name": "NanoTrader L",
           "coin": "KAS/USDT",
           "orders": 5,
           "value": 250,
           "percentage": 1.25,
           "date": "10/03/2023 09:45",
           "totalBought": 2800.75,
           "baseVolume": 1400,
           "totalCoin": 51000,
           "MFI": 34.80,
           "levarge": 2.7
         },
         {
           "id": 13,
           "name": "NanoTrader M",
           "coin": "KAS/USDT",
           "orders": 3,
           "value": 480,
           "percentage": 2.40,
           "date": "20/03/2023 18:30",
           "totalBought": 2300.85,
           "baseVolume": 1150,
           "totalCoin": 48500,
           "MFI": 31.80,
           "levarge": 2.5
         },
         {
           "id": 14,
           "name": "NanoTrader N",
           "coin": "LDO/USDT",
           "orders": 4,
           "value": -300,
           "percentage": -1.60,
           "date": "07/04/2023 10:20",
           "totalBought": 2100.95,
           "baseVolume": 1050,
           "totalCoin": 45000,
           "MFI": 28.75,
           "levarge": 1.9
         },
         {
           "id": 15,
           "name": "NanoTrader O",
           "coin": "KAS/USDT",
           "orders": 6,
           "value": 200,
           "percentage": 1.00,
           "date": "02/03/2023 20:10",
           "totalBought": 3000.90,
           "baseVolume": 1500,
           "totalCoin": 52000,
           "MFI": 35.10,
           "levarge": 2.8
         },
         {
           "id": 16,
           "name": "NanoTrader P",
           "coin": "KAS/USDT",
           "orders": 2,
           "value": 600,
           "percentage": 3.20,
           "date": "25/02/2023 15:00",
           "totalBought": 2500.50,
           "baseVolume": 1250,
           "totalCoin": 49500,
           "MFI": 33.60,
           "levarge": 2.9
         },
         {
           "id": 17,
           "name": "NanoTrader Q",
           "coin": "LDO/USDT",
           "orders": 7,
           "value": -100,
           "percentage": -0.50,
           "date": "17/04/2023 08:55",
           "totalBought": 1600.45,
           "baseVolume": 800,
           "totalCoin": 42000,
           "MFI": 27.20,
           "levarge": 1.4
         },
         {
           "id": 18,
           "name": "NanoTrader R",
           "coin": "KAS/USDT",
           "orders": 4,
           "value": 450,
           "percentage": 2.25,
           "date": "14/03/2023 11:05",
           "totalBought": 2700.60,
           "baseVolume": 1350,
           "totalCoin": 50500,
           "MFI": 34.20,
           "levarge": 2.4
         },
         {
           "id": 19,
           "name": "NanoTrader S",
           "coin": "KAS/USDT",
           "orders": 5,
           "value": 320,
           "percentage": 1.60,
           "date": "08/03/2023 21:50",
           "totalBought": 2900.75,
           "baseVolume": 1450,
           "totalCoin": 51500,
           "MFI": 35.90,
           "levarge": 2.6
         },
         {
           "id": 20,
           "name": "NanoTrader T",
           "coin": "LDO/USDT",
           "orders": 3,
           "value": -400,
           "percentage": -2.10,
           "date": "05/04/2023 06:40",
           "totalBought": 2200.55,
           "baseVolume": 1100,
           "totalCoin": 46000,
           "MFI": 29.00,
           "levarge": 1.8
         },
         {
           "id": 21,
           "name": "NanoTrader U",
           "coin": "KAS/USDT",
           "orders": 6,
           "value": 100,
           "percentage": 0.50,
           "date": "11/03/2023 14:45",
           "totalBought": 3100.80,
           "baseVolume": 1550,
           "totalCoin": 52500,
           "MFI": 36.50,
           "levarge": 3
         },
         {
          "id": 21,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 6,
          "value": 100,
          "percentage": 0.50,
          "date": "11/03/2023 14:45",
          "totalBought": 3100.80,
          "baseVolume": 1550,
          "totalCoin": 52500,
          "MFI": 36.50,
          "levarge": 3
        },
        {
          "id": 22,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 4,
          "value": 150,
          "percentage": 0.60,
          "date": "11/04/2023 10:30",
          "totalBought": 4500.60,
          "baseVolume": 2300,
          "totalCoin": 40000,
          "MFI": 42.30,
          "levarge": 2
        },
        {
          "id": 23,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 8,
          "value": 200,
          "percentage": 0.75,
          "date": "11/05/2023 11:15",
          "totalBought": 5200.20,
          "baseVolume": 2700,
          "totalCoin": 60000,
          "MFI": 48.50,
          "levarge": 4
        },
        {
          "id": 24,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 5,
          "value": 180,
          "percentage": 0.55,
          "date": "11/06/2023 09:00",
          "totalBought": 3900.50,
          "baseVolume": 2100,
          "totalCoin": 45000,
          "MFI": 40.10,
          "levarge": 3
        },
        {
          "id": 25,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 7,
          "value": 130,
          "percentage": 0.65,
          "date": "11/07/2023 14:20",
          "totalBought": 4700.90,
          "baseVolume": 2400,
          "totalCoin": 53000,
          "MFI": 45.60,
          "levarge": 2
        },
        {
          "id": 26,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 9,
          "value": 210,
          "percentage": 0.70,
          "date": "11/08/2023 12:45",
          "totalBought": 5600.70,
          "baseVolume": 2900,
          "totalCoin": 62000,
          "MFI": 50.00,
          "levarge": 4
        },
        {
          "id": 27,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 3,
          "value": 90,
          "percentage": 0.40,
          "date": "11/09/2023 16:10",
          "totalBought": 2700.30,
          "baseVolume": 1300,
          "totalCoin": 41000,
          "MFI": 35.20,
          "levarge": 1
        },
        {
          "id": 28,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 6,
          "value": 170,
          "percentage": 0.50,
          "date": "11/10/2023 08:55",
          "totalBought": 5100.50,
          "baseVolume": 2500,
          "totalCoin": 57000,
          "MFI": 43.70,
          "levarge": 3
        },
        {
          "id": 29,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 5,
          "value": 160,
          "percentage": 0.60,
          "date": "11/11/2023 13:35",
          "totalBought": 4900.80,
          "baseVolume": 2200,
          "totalCoin": 50000,
          "MFI": 44.00,
          "levarge": 2
        },
        {
          "id": 30,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 7,
          "value": 140,
          "percentage": 0.45,
          "date": "11/12/2023 15:50",
          "totalBought": 4300.20,
          "baseVolume": 2000,
          "totalCoin": 48000,
          "MFI": 41.50,
          "levarge": 3
        },
        {
          "id": 31,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 4,
          "value": 110,
          "percentage": 0.55,
          "date": "11/13/2023 11:20",
          "totalBought": 3500.40,
          "baseVolume": 1800,
          "totalCoin": 45000,
          "MFI": 39.80,
          "levarge": 2
        },
        {
          "id": 32,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 8,
          "value": 190,
          "percentage": 0.65,
          "date": "11/14/2023 07:50",
          "totalBought": 5400.90,
          "baseVolume": 2600,
          "totalCoin": 60000,
          "MFI": 47.50,
          "levarge": 3
        },
        {
          "id": 33,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 6,
          "value": 120,
          "percentage": 0.50,
          "date": "11/15/2023 09:30",
          "totalBought": 4100.60,
          "baseVolume": 2100,
          "totalCoin": 49000,
          "MFI": 38.70,
          "levarge": 2
        },
        {
          "id": 34,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 5,
          "value": 180,
          "percentage": 0.60,
          "date": "11/16/2023 14:15",
          "totalBought": 5100.70,
          "baseVolume": 2400,
          "totalCoin": 55000,
          "MFI": 44.90,
          "levarge": 3
        },
        {
          "id": 35,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 7,
          "value": 150,
          "percentage": 0.65,
          "date": "11/17/2023 12:00",
          "totalBought": 4700.20,
          "baseVolume": 2300,
          "totalCoin": 53000,
          "MFI": 45.00,
          "levarge": 2
        },
        {
          "id": 36,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 9,
          "value": 200,
          "percentage": 0.70,
          "date": "11/18/2023 11:10",
          "totalBought": 5600.50,
          "baseVolume": 2900,
          "totalCoin": 61000,
          "MFI": 49.80,
          "levarge": 4
        },
        {
          "id": 37,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 5,
          "value": 170,
          "percentage": 0.60,
          "date": "11/19/2023 08:45",
          "totalBought": 5200.60,
          "baseVolume": 2500,
          "totalCoin": 57000,
          "MFI": 46.70,
          "levarge": 3
        },
        {
          "id": 38,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 4,
          "value": 190,
          "percentage": 0.65,
          "date": "11/20/2023 16:35",
          "totalBought": 5400.80,
          "baseVolume": 2600,
          "totalCoin": 58000,
          "MFI": 48.60,
          "levarge": 2
        },
        {
          "id": 39,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 6,
          "value": 160,
          "percentage": 0.55,
          "date": "11/21/2023 15:20",
          "totalBought": 5000.30,
          "baseVolume": 2400,
          "totalCoin": 56000,
          "MFI": 45.80,
          "levarge": 3
        },
        {
          "id": 40,
          "name": "NanoTrader U",
          "coin": "LDO/USDT",
          "orders": 7,
          "value": 150,
          "percentage": 0.60,
          "date": "11/22/2023 14:05",
          "totalBought": 4800.90,
          "baseVolume": 2200,
          "totalCoin": 54000,
          "MFI": 44.30,
          "levarge": 2
        },
        {
          "id": 41,
          "name": "NanoTrader U",
          "coin": "KAS/USDT",
          "orders": 8,
          "value": 140,
          "percentage": 0.45,
          "date": "11/23/2023 13:50",
          "totalBought": 4600.70,
          "baseVolume": 2000,
          "totalCoin": 52000,
          "MFI": 43.20,
          "levarge": 3
        }
       ])
       this.cdr.detectChanges()
     }, 900);
   }

}
