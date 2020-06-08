import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { StatisticComponent } from './statistic.component';
import { NgxEchartsModule } from 'ngx-echarts';

//import { TrafficChartComponent } from './traffic/traffic-chart.component';
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxEchartsModule
  ],
  declarations: [
    StatisticComponent,
  ],
})
export class StatisticModule { }
