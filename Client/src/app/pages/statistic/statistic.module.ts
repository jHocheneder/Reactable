import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { StatisticComponent } from './statistic.component';
import { ChartsModule } from 'ng2-charts';
//import { TrafficChartComponent } from './traffic/traffic-chart.component';
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ChartsModule
  ],
  declarations: [
    StatisticComponent,
  ],
})
export class StatisticModule { }
