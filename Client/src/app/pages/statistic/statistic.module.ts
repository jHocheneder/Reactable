import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { StatisticComponent } from './statistic.component';
//import { TrafficChartComponent } from './traffic/traffic-chart.component';
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule
  ],
  declarations: [
    StatisticComponent,
  ],
})
export class StatisticModule { }
