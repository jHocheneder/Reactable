import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { StatisticComponent } from './statistic.component';

import { D3PieComponent } from './d3-pie.component';

const components = [  
  D3PieComponent
];
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,    
    NgxChartsModule,
    D3PieComponent

  ],
  declarations: [
    StatisticComponent,
    D3PieComponent
  ],
})
export class StatisticModule { }
